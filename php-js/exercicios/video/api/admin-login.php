<?php

session_start();

require "connection.php";

$admin = filter_input_array(INPUT_POST);
// apenas para testar se os dados do form estão chegando
// echo json_encode($user);

if(in_array("", $admin)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos!"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM admins WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email", $admin["email"]);
$stmt->execute();

if($stmt->rowCount() == 0){
    $response = [
        "type" => "error",
        "message" => "E-mail não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$adminDB = $stmt->fetch();

if(!password_verify($admin["password"], $adminDB->password)){
    $response = [
        "type" => "error",
        "message" => "Senha inválida"
    ];
    echo json_encode($response);
    exit;
}

unset($adminDB->password);

$_SESSION["admin"] = $adminDB;

$response = [
    "type" => "success",
    "message" => "Olá, {$adminDB->name} seja bem vindo(a)!",
    "user" => $adminDB
];

echo json_encode($response);
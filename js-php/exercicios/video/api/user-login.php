<?php

session_start();

require "connection.php";

$user = filter_input_array(INPUT_POST);
// apenas para testar se os dados do form estão chegando
// echo json_encode($user);

if(in_array("", $user)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos!"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email", $user["email"]);
$stmt->execute();

if($stmt->rowCount() == 0){
    $response = [
        "type" => "error",
        "message" => "E-mail não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$userDB = $stmt->fetch();

if(!password_verify($user["password"], $userDB->password)){
    $response = [
        "type" => "error",
        "message" => "Senha inválida"
    ];
    echo json_encode($response);
    exit;
}

unset($userDB->password);
//unset($userDB->email);

$_SESSION["user"] = $userDB;

$response = [
    "type" => "success",
    "message" => "Olá, {$userDB->name} seja bem vindo(a)!",
    "user" => $userDB
];

echo json_encode($response);
<?php

require "connection.php";

// $_POST
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

if(!filter_var($user["email"], FILTER_VALIDATE_EMAIL)){
    $response = [
        "type" => "error",
        "message" => "E-mail inválido!"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email", $user["email"]);
$stmt->execute();
if($stmt->rowCount() == 1){
    $response = [
        "type" => "error",
        "message" => "E-mail já cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$query = "INSERT INTO users (id, name, email, password) 
          VALUES (NULL, :name, :email, :password)";

$stmt = $conn->prepare($query);
$stmt->bindParam("name", $user["name"]);
$stmt->bindParam("email", $user["email"]);
$password = password_hash($user["password"], PASSWORD_DEFAULT);
$stmt->bindParam("password", $password);
$stmt->execute();

if($stmt->rowCount() != 1) {
    $response = [
        "type" => "error",
        "message" => "Usuário não cadastrado, tente novamente!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "error",
    "message" => "Usuário cadastrado com sucesso!"
];

echo json_encode($response);

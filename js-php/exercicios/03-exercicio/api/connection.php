<?php

$host = "localhost";
$user = "root";
$password = "12345";
$database = "db_company_3am";
$port = "3306";

$conn = new PDO(
    "mysql:host=$host;port=$port;dbname=$database",
    $user,
    $password
);

var_dump($conn);

$stmt = $conn->query("SELECT * FROM products");

var_dump($stmt->fetchAll());



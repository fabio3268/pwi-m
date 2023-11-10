<?php

require "connection.php";

$categoryId = filter_input(INPUT_GET, "categoryId");

$query = "SELECT * FROM books WHERE category_id = :category_id";
$stmt = $conn->prepare($query);
$stmt->bindParam("category_id", $categoryId);
$stmt->execute();

echo json_encode($stmt->fetchAll());

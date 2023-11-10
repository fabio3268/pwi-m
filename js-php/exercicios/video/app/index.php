<?php

session_start();

if(empty($_SESSION["user"])){
    header("Location: ../user-login.php");
}


$user = $_SESSION["user"];

var_dump($user->id);
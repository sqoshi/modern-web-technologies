<?php
session_start();

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}
require_once "config.php";

$query = "DELETE FROM `users` WHERE username = ?";
$stmt = $link->prepare($query);
$stmt->bind_param('s', $_SESSION['username']);
$stmt->execute();
$stmt->close();



include('logout.php');
?>
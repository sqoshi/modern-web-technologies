<?php
require_once "config.php";
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}



$query = "SELECT * FROM `visits` WHERE ip = ? AND last_visit < NOW()";
$stmt = $link->prepare($query);
$stmt->bind_param('s', $ip);
$stmt->execute();

$result = $stmt->get_result();
if ($result->num_rows == 0) {
    $sql = "INSERT INTO `visits` (ip, last_visit) VALUES (?, NOW())";
    if ($stmt = mysqli_prepare($link, $sql)) {
        mysqli_stmt_bind_param($stmt, "s", $ip);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
    }
}
$stmt->free_result();
$stmt->close();



$query = "SELECT * FROM `visits`";
$stmt = $link->prepare($query);
$stmt->execute();
$result = $stmt->get_result();
echo "<div style='width:100%;display: flex;justify-content: center;'><p>Views: $result->num_rows </p></div>";
$stmt->free_result();
$stmt->close();


$link->close();

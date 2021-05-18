<?php
if (isset($_SESSION['timestamp'])) {
    if (time() - $_SESSION['timestamp'] > 300) { //subtract new timestamp from the old one
        echo "<script>alert('5 Minutes over!');</script>";
        unset($_SESSION['username'], $_SESSION['password'], $_SESSION['timestamp']);
        $_SESSION['loggedin'] = false;
        header("Location: logout.php");
        exit;
    }
} else {
    $_SESSION['timestamp'] = time(); //set new timestamp
}
?>
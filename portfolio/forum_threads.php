<?php
session_start();

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <link rel="stylesheet" href="resources/css/forum.css">
    <script src="resources/js/threads.js"></script>
    <title>Forum</title>
</head>

<body onload='setImage()'>
    <?php
    include('menu.php')
    ?>
    <div id="page-content">
        <div class="center-tile">
            <div id='thread-nav'>
                <form class='thread' action="forum.php" method='get'>
                    <input type='text' name="image-name" style="display:none;" value="woe.jpg"></input>
                    <input type='submit' value="Warrios of Enarthia"></input>
                </form>
                <form class='thread' action="forum.php" method='get'>
                    <input type='text' name="image-name" style="display:none;" value="nnb.png"></input>
                    <input type='submit' value="Neural Network Designer"></input>
                </form>
                <form class='thread' action="forum.php" method='get'>
                    <input type='text' name="image-name" style="display:none;" value="gwi.png"></input>
                    <input type='submit' value="Global warming investigator"></input>
                </form>
                <form class='thread' action="forum.php" method='get'>
                    <input type='text' name="image-name" style="display:none;" value="csa.png"></input>
                    <input type='submit' value="Covid spread analyzer"></input>
                </form>
                <form class='thread' action="forum.php" method='get'>
                    <input type='text' name="image-name" style="display:none;" value="shopping_bot.png"></input>
                    <input type='submit' value="Shopping bot"></input>
                </form>
                <form class='thread' action="forum.php" method='get'>
                    <input type='text' name="image-name" style="display:none;" value="portfolio.png"></input>
                    <input type='submit' value="Portfolio"></input>
                </form>
                <form class='thread' action="forum.php" method='get'>
                    <input type='text' name="image-name" style="display:none;" value="announce_flask.png"></input>
                    <input type='submit' value="Announces app"></input>
                </form>
                <form class='thread' action="forum.php" method='get'>
                    <input type='text' name="image-name" style="display:none;" value="gogame_java.png"></input>
                    <input type='submit' value="Go game"></input>
                </form>
            </div>
        </div>

    </div>
</body>

</html>
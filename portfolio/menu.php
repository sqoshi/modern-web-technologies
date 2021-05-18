<?php

if (isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] === true) {
  echo '<meta http-equiv="refresh" content="300;url=logout.php" />';
}

?>
<link rel="stylesheet" href="resources/css/menu.css">
<noscript>
  <link href="resources/css/menu_no_js.css" rel="stylesheet" />
</noscript>
<nav id="menu">
  <div id='menu-header'>
    <a id='menu-logo-a' href="index.php"><img id='menu-logo-img' src="resources/img/logo_wolf_white.png" alt='menu-logo' /></a>
    <svg id='menu-icon' onclick='toggle_menu()' viewBox="0 0 100 80">
      <rect class='hamburger-rect' width='100px' height='20px'></rect>
      <rect class='hamburger-rect' y="30" width='100px' height='20px'></rect>
      <rect class='hamburger-rect' y="60" width='100px' height='20px'></rect>
    </svg>
  </div>
  <nav id='menu-links' class='menu-links'>
    <a class='link' href="index.php">Home</a>
    <a class='link' href="projects.php">Projects</a>
    <a class="link" href="login.php">Forum</a>
    <?php
    if (isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] == true) {
      echo ('<a class="link" href="logout.php">Logout [' . htmlspecialchars($_SESSION["username"]) . ']</a>');
      echo ('<a class="link" href="remove_account.php">Remove account [' . htmlspecialchars($_SESSION["username"]) . ']</a>');
    }
    ?>
  </nav>
</nav>
<script src="resources/js/menu.js"></script>
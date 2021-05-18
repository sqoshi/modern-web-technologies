<?php
session_start();

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}

require "config.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require "config.php";
    $sql = "INSERT INTO `comments` (username, content, project) VALUES (?, ?, ?)";
    if ($stmt = mysqli_prepare($link, $sql)) {
        $usr = $_SESSION['username'];
        $cnt = $_POST['content'];
        $pr = $_POST['image-name'];
        mysqli_stmt_bind_param($stmt, "sss", $usr, $cnt, $pr);
        if (mysqli_stmt_execute($stmt)) {
            header("location: forum.php?image-name=" . $_POST['image-name']);
        } else {
            header("location: projects.php");
            echo "Oops! Statement execution failed. Please try again later.";
        }
        mysqli_stmt_close($stmt);
    }
    mysqli_close($link);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="resources/css/forum.css">
    <script src="resources/js/forum.js"></script>
    <title>Forum</title>
</head>

<body onload='setImage()'>
    <?php
    include('menu.php')
    ?>
    <div id="page-content">
        <div class="center-tile">
            <div id="image-container">
                <img id='project-preview'></img>
            </div>
            <div id="comments-container">
                <?php
                require "config.php";

                $img = $_GET['image-name'];

                $query = "SELECT * FROM `comments` WHERE project = ?";
                $stmt = $link->prepare($query);
                $stmt->bind_param('s', $img);
                $stmt->execute();

                $result = $stmt->get_result();
                while ($row = $result->fetch_assoc()) {
                    echo "<div class='comment-row'><div class='comment-username'>" . $row["username"] . "</div><div class='comment-content'>" . $row["content"]  . "</div></div>";
                }
                $stmt->free_result();
                $stmt->close();
                $link->close();
                ?>
            </div>
            <form id="input-container" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method='post'>
                <input type="text" name='image-name' id='input-project' style="display:none;">
                <input type="text" name='content' id='input-text' value="Comment">
                <input type="submit" id='insert-btn'></input>
            </form>
        </div>
    </div>
</body>

</html>
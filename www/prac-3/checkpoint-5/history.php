<!DOCTYPE html>
<html lang="en">

<head>
    <title>Practical 3: Task History</title>
    <meta charset="UTF-8" />
    <meta name="author" content="Lucas McVey" />
    <link rel="stylesheet" href="styles/style.css" />
    <script src="scripts/script.js" defer></script>
</head>


<body class="history-page"> <?php require_once "inc/menu.inc.php"; ?>
    <h1>History</h1>
    <?php
    
    require_once "inc/dbconn.inc.php";

    $sql = "SELECT name FROM Task WHERE completed=1 ORDER BY updated DESC;";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) >= 1) {
        echo "<ul>";
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<li class='completed-task'>" . $row["name"] . "</li>";
        }
        echo "</ul>";

        mysqli_free_result($result);
    } else {
        echo "No completed tasks found.";
    }

    mysqli_close($conn);
    ?>
</body>

</html>

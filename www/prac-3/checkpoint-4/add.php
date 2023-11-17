<!DOCTYPE html>
<html lang="en">
<head>
    <title>Practical 3: Current tasks</title>
    <meta charset="UTF-8" />
    <meta name="author" content="Lucas McVey" />
    <link rel="stylesheet" type="text/css" href="styles/style.css">
     <script src="scripts/script.js" defer></script> 
</head>
<body>
    <?php require_once "inc/menu.inc.php"; ?> 
    <h1>Add a new task</h1>

    <form action="add-task.php" method="POST">
    <input type="text" name="task-name" placeholder="Enter the task name">
    <input type="submit" value="Add Task">
    </form>

</body>
</html>

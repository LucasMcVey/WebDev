<?php
require_once "inc/dbconn.inc.php"; 

if (isset($_POST["task-name"])) {
   

    $sql = "INSERT INTO Task(name) VALUES(?);";

    $statement = mysqli_stmt_init($conn);
    if (mysqli_stmt_prepare($statement, $sql)) {
        mysqli_stmt_bind_param($statement, 's', htmlspecialchars($_POST["task-name"])); 
        
        if (mysqli_stmt_execute($statement)) {
            mysqli_stmt_close($statement);
            mysqli_close($conn);
            header("location: add.php");
            exit;
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    } else {
        echo "Statement preparation failed: " . mysqli_stmt_error($statement);
    }

    mysqli_stmt_close($statement);
    mysqli_close($conn);
}
?>

<?php
require_once "inc/dbconn.inc.php";

if (isset($_GET["id"]) && is_numeric($_GET["id"])) {
    $taskId = $_GET["id"];
    
    $sql = "UPDATE Task SET completed=1, updated=now() WHERE id=?";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "i", $taskId);
    
    if (mysqli_stmt_execute($stmt)) {
        mysqli_stmt_close($stmt);
        mysqli_close($conn);
        
       
        header("Location: index.php");
        exit();
    } else {
        echo "Error updating task.";
    }
} else {
    echo "Invalid task ID.";
}
?>

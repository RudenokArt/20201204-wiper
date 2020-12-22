<?php 
include_once 'connect.php';

echo $_POST['data'];
$mysqli->query($_POST['data']);

?>
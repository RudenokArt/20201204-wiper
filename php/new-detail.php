<?php 
include_once 'connect.php';

$detail=$_POST['detail'];
$article=$_POST['article'];
$discribe=$_POST['discribe'];
$modification=$_POST['modification'];
echo $detail.' : '.$article.' : '.$discribe.' : '.$modification;
$mysqli->query('INSERT INTO `catalog_detail`(`detail`,`modification`,`article`,`discribe`)
		VALUES ("'.$detail.'","'.$modification.'","'.$article.'","'.$discribe.'")');

?>
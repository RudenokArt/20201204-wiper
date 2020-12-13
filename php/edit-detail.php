<?php 
include_once 'connect.php';
$id=$_POST['id'];
$detail=$_POST['detail'];
$article=$_POST['article'];
$discribe=$_POST['discribe'];
$modification=$_POST['modification'];
echo $id.' : '.$detail.' : '.$article.' : '.$discribe.' : '.$modification;
$mysqli->query('UPDATE `catalog_detail` 
	SET `detail`="'.$detail.'",`modification`="'.$modification.'",`article`="'.$article.'",`discribe`="'.$discribe.'" WHERE `id`="'.$id.'"');

?>
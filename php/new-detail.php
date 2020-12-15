<?php 
include_once 'connect.php';
$id=$_POST['id'];
$modification=$_POST['pageId'];
$detail=$_POST['detail'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$name=explode('.', $name);
move_uploaded_file($take, '../picture/'.$id.'.jpg');
$mysqli->query('INSERT INTO `catalog_detail`(`id`,`detail`,`modification`) 
	VALUES ("'.$id.'","'.$detail.'","'.$modification.'")');
?>
<script>document.location.href = "../admin.php";</script>
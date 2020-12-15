<?php 
include_once 'connect.php';
$id=$_POST['id'];
$model=$_POST['pageId'];
$modification=$_POST['modification'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$name=explode('.', $name);
move_uploaded_file($take, '../picture/'.$id.'.jpg');
$mysqli->query('INSERT INTO `catalog_modification`(`id`,`modification`,`model`) 
	VALUES ("'.$id.'","'.$modification.'","'.$model.'")');
?>
<script>document.location.href = "../admin.php";</script>
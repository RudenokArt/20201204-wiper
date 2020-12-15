<?php 
include_once 'connect.php';
$id=$_POST['id'];
$brand=$_POST['brand'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$name=explode('.', $name);
move_uploaded_file($take, '../picture/'.$id.'.jpg');
$mysqli->query('INSERT INTO `catalog_brand`(`id`,`brand`) 
	VALUES ("'.$id.'","'.$brand.'")');

?>
<script>document.location.href = "../admin.php";</script>
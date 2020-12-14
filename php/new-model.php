<?php 
include_once 'connect.php';
$id=$_POST['id'];
$brand=$_POST['pageId'];
$model=$_POST['model'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$name=explode('.', $name);
move_uploaded_file($take, '../picture/'.$id.'.jpg');
$mysqli->query('INSERT INTO `catalog_model`(`id`,`model`,`brand`) 
	VALUES ("'.$id.'","'.$model.'","'.$brand.'")');
print_r($name);
echo '<br>'.$model;

?>
<script>document.location.href = "../admin.php";</script>
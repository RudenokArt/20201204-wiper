<?php 
include_once 'connect.php';
$id=$_POST['id'];
$model=$_POST['model'];
$brand=$_POST['pageId'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$name=explode('.', $name);
move_uploaded_file($take, '../picture/'.$id.'.jpg');
$mysqli->query('UPDATE `catalog_model` 
	SET `model`="'.$model.'", `brand`="'.$brand.'" WHERE `id`="'.$id.'"');
echo $brand.' '.$model.' '.$id;
?>
<script>document.location.href = "../admin.php";</script>
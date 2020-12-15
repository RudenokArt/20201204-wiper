<?php 
include_once 'connect.php';
$id=$_POST['id'];
$modification=$_POST['modification'];
$model=$_POST['pageId'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$name=explode('.', $name);
move_uploaded_file($take, '../picture/'.$id.'.jpg');
$mysqli->query('UPDATE `catalog_modification` 
	SET `modification`="'.$modification.'", `model`="'.$model.'" WHERE `id`="'.$id.'"');
echo $modification.' '.$model.' '.$id;
?>
<script>document.location.href = "../admin.php";</script>
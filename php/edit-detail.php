<?php 
include_once 'connect.php';
$id=$_POST['id'];
$detail=$_POST['detail'];
$modification=$_POST['pageId'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$name=explode('.', $name);
move_uploaded_file($take, '../picture/'.$id.'.jpg');
$mysqli->query('UPDATE `catalog_detail` 
	SET `detail`="'.$detail.'", `modification`="'.$modification.'" WHERE `id`="'.$id.'"');
echo $detail.' '.$modification.' '.$id;
?>

<script>document.location.href = "../admin.php";</script>
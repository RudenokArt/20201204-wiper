<?php 
include_once 'connect.php';
$id=$_POST['id'];
$brand=$_POST['brand'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
echo $brand.' '.$name.' '.$id;
$name=explode('.', $name);
move_uploaded_file($take, '../picture/'.$id.'.jpg');
$mysqli->query('UPDATE `catalog_brand` SET `brand`="'.$brand.'" WHERE `id`="'.$id.'"');
print_r($name);
echo '<br>'.$brand;

?>
<script>document.location.href = "../admin.php";</script>
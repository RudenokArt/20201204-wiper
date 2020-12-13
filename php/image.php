<?php 
include_once 'connect.php';
$table=$_POST['table'];
$picture=$_POST['picture'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
move_uploaded_file($take,'../picture/'.$table.'-'.$picture.'.jpg');

?>
<script>document.location.href = "../admin.php";</script>
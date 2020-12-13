<?php 
include_once 'connect.php';
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
move_uploaded_file($take, $name);
$file=file($name);
for ($i=0; $i < sizeof($file) ; $i++) { 
	$mysqli->query('INSERT INTO `catalog_brand`(`brand`) VALUES ("'.trim($file[$i]).'")');
}
unlink($name);
?>
<script>document.location.href = "../admin.php";</script>
<?php 
include_once 'connect.php';
$model=$_POST['column-name'];
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
move_uploaded_file($take, $name);
$file=file($name);
print_r($file);
for ($i=0; $i < sizeof($file) ; $i++) { 
	$mysqli->query('INSERT INTO `catalog_modification`(`modification`,`model`) 
		VALUES ("'.trim($file[$i]).'","'.trim($model).'")');
}
unlink($name);

?>
<script>document.location.href = "../admin.php";</script>
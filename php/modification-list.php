<?php 
include_once 'connect.php';

$list=$_POST['list'];
$model=$_POST['pageId'];
$arr=explode("\n", $list);
for ($i=0; $i <sizeof($arr) ; $i++) { 
	$mysqli->query('INSERT INTO `catalog_modification`(`id`,`modification`,`model`) 
		VALUES ("'.rand(1,1000000000).'","'.trim($arr[$i]).'","'.$model.'")');
}
print_r($arr);
?>
<script>document.location.href = "../admin.php";</script>
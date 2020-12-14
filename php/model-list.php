<?php 
include_once 'connect.php';

$list=$_POST['list'];
$brand=$_POST['pageId'];
$arr=explode("\n", $list);
for ($i=0; $i <sizeof($arr) ; $i++) { 
	$mysqli->query('INSERT INTO `catalog_model`(`model`,`brand`) 
		VALUES ("'.trim($arr[$i]).'","'.$brand.'")');
}
print_r($arr);
?>
<script>document.location.href = "../admin.php";</script>
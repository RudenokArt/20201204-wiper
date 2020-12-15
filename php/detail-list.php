<?php 
include_once 'connect.php';

$list=$_POST['list'];
$modification=$_POST['pageId'];
$arr=explode("\n", $list);
for ($i=0; $i <sizeof($arr) ; $i++) { 
	$mysqli->query('INSERT INTO `catalog_detail`(`id`,`detail`,`modification`) 
		VALUES ("'.rand(1,1000000000).'","'.trim($arr[$i]).'","'.$modification.'")');
}
print_r($arr);
?>
<script>document.location.href = "../admin.php";</script>
<?php 
include_once 'connect.php';

$data=$_POST['data'];
$arr=json_decode($data);
$mysqli->query('UPDATE `catalog_'.$arr[0].'` 
	SET `'.$arr[0].'`="'.$arr[1].'" 
	WHERE `id`="'.$arr[3].'"');
print_r($arr);

?>
<?php 
include_once 'connect.php';

$data=$_POST['data'];
$arr=json_decode($data);
if ($arr[0]=='brand'){
	$mysqli->query('INSERT INTO `catalog_brand`(`brand`) VALUES ("'.$arr[2].'")');
}
else if ($arr[0]=='model'){
	$mysqli->query('INSERT INTO `catalog_model`(`model`,`brand`) 
		VALUES ("'.$arr[2].'","'.$arr[1].'")');
}
else if ($arr[0]=='modification'){
	$mysqli->query('INSERT INTO `catalog_modification`(`modification`,`model`)
		VALUES ("'.$arr[2].'","'.$arr[1].'")');
}
else if ($arr[0]=='detail'){
	$mysqli->query('INSERT INTO `catalog_detail`(`detail`,`modification`)
		VALUES ("'.$arr[2].'","'.$arr[1].'")');
}

print_r($arr);

?>
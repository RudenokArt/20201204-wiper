<?php 

include_once 'connect.php';
$data=$_POST['data'];
$arr=json_decode($data);
if($arr[2]=='detail'){
	$mysqli->query('DELETE FROM `catalog_detail` 
		WHERE id="'.$arr[0].'"');
	echo 'Элемент удален!';
}
if($arr[2]=='modification'){
	$modification=[];
	$sql = 	$mysqli->query('SELECT * FROM `catalog_modification` 
		WHERE `id`="'.$arr[0].'"');
	while ($result = mysqli_fetch_array($sql)) {
		$modification[]=$result['modification'];
	}
	// $str=mb_substr($modification[0],2,-2);
	$str=$modification[0];
	$detail=[];
	$sql = $mysqli->query('SELECT * FROM `catalog_detail` 
		WHERE `modification` LIKE "%'.$str.'%"');
	while ($result = mysqli_fetch_array($sql)) {
		$detail[]=$result;
	}
	if(sizeof($detail)!='0'){
		echo'Удаление запрещено. Каталог имеет вложенные элементы!';
	}else{
		$mysqli->query('DELETE FROM `catalog_modification` 
		WHERE `id`="'.$arr[0].'"');
		echo 'Элемент удален!';
	}
}
if($arr[2]=='model'){
	$model=[];
	$sql = 	$mysqli->query('SELECT * FROM `catalog_model` 
		WHERE `id`="'.$arr[0].'"');
	while ($result = mysqli_fetch_array($sql)) {
		$model[]=$result['model'];
	}
	$str=$model[0];
	$modification=[];
	$sql = $mysqli->query('SELECT * FROM `catalog_modification` 
		WHERE `model` LIKE "%'.$str.'%"');
	while ($result = mysqli_fetch_array($sql)) {
		$modification[]=$result;
	}
	if(sizeof($modification)!='0'){
		echo'Удаление запрещено. Каталог имеет вложенные элементы!';
	}else{
		$mysqli->query('DELETE FROM `catalog_model` 
		WHERE `id`="'.$arr[0].'"');
		echo 'Элемент удален!';
	}
}
if($arr[2]=='brand'){
	$brand=[];
	$sql = 	$mysqli->query('SELECT * FROM `catalog_brand` 
		WHERE `id`="'.$arr[0].'"');
	while ($result = mysqli_fetch_array($sql)) {
		$brand[]=$result['brand'];
	}
	$str=$brand[0];
	$model=[];
	$sql = $mysqli->query('SELECT * FROM `catalog_model` 
		WHERE `brand` LIKE "%'.$str.'%"');
	while ($result = mysqli_fetch_array($sql)) {
		$model[]=$result;
	}
	if(sizeof($model)!='0'){
		echo'Удаление запрещено. Каталог имеет вложенные элементы!';
	}else{
		$mysqli->query('DELETE FROM `catalog_brand` 
		WHERE `id`="'.$arr[0].'"');
		echo 'Элемент удален!';
	}
}
?>
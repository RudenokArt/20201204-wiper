<?php 

include_once 'connect.php';
$sql = $mysqli->query($_POST['data']);
$arr=[];
 while ($result = mysqli_fetch_array($sql)) {
 	$arr[]=$result;
 }
$str=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $str;

?>
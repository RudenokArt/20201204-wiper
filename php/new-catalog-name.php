<?php 

$data=$_POST['data'];
file_put_contents('catalog-name.txt', $data);
$file=file('catalog-name.txt');
print_r($file);




?>
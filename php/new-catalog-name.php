<?php 

$data=$_POST['catalog'];

file_put_contents('catalog-name.txt', $data);
$file=file('catalog-name.txt');
print_r($file);




?>
<script>document.location.href = "../admin.php";</script>
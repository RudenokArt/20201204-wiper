<?php 

include_once 'connect.php';

$data=$_POST['data'];
unlink('../picture/'.$data.'.jpg');
echo $data;


?>
<?php
include 'DbClass.php';
$db = new Db();  
$rows = $db -> select("select type,id from categories");
if($rows)
{
    $db -> close();
    echo json_encode($rows);
}
else
{
    $db -> close();
    echo json_encode("0");
}

?>
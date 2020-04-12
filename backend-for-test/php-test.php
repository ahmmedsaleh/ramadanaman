<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");




$Country = [];




    $Country[0]['id']           = 1;
    $Country[0]['name']     = 'Country1';
    $Country[1]['id']    = 2;
    $Country[1]['name']   = 'Country2';
    $Country[2]['id']    = 3;
    $Country[2]['name']   = 'Country3';


    echo json_encode($Country);
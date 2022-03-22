<?php

use Illuminate\Database\Capsule\Manager as DB;

$DB = new DB();

$DB->addConnection([
    'driver'=>'mysql',
    'host'=>'localhost',
    'database'=>'dbs2162417',
    'username'=>'root',
    // 'password'=>'2009',
    'password'=>'',
    'charset'=>'utf8',
    'collation'=>'utf8_unicode_ci',
]);

$DB->setAsGlobal();
$DB->bootEloquent();

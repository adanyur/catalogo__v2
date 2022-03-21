<?php

require_once dirname(dirname(dirname(__FILE__))).'/vendor/autoload.php';
require_once dirname(dirname(__FILE__)).'/config/database.php';
use App\models\Category;

class CategoryController {


    public function index(){
        return Category::all();
    }

    public function  store($request){}

    public function  show(){}

    public function update(){}

    public function delete(){
        
    }


}
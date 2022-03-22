<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'/vendor/autoload.php';
require_once dirname(dirname(__FILE__)).'/config/database.php';
use App\models\Category;

class CategoryController {


    public function index($id){

        if($id){
            return Category::whereId($id)->with('product')->first();
        }

        return Category::all();
    }

    public function  store($request){}

    public function  show($id){
        return Category::whereId($id)->first();
    }

    public function update(){}

    public function delete(){}


}
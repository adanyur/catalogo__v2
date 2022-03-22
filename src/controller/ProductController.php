<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'/vendor/autoload.php';
require_once dirname(dirname(__FILE__)).'/config/database.php';
use App\models\Product;


class ProductController {


    public function index($id){
        return $id ? Product::whereCategory($id)->get(): Product::all();
    }
    
    public function  store($request){
    }

    public function  show($id){
        return Product::whereId($id)->first();
    }

    public function update(){}

    public function delete(){
        
    }


}
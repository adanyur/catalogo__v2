<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'/vendor/autoload.php';
require_once dirname(dirname(__FILE__)).'/config/database.php';
use App\models\Product;


class ProductController {


    public function index($id){
        
        if(!$id){
             return Product::all();
         }
         return Product::whereCategory($id)->get();    
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
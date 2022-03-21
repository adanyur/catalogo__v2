<?php
use App\models\Product;

require_once dirname(dirname(dirname(__FILE__))).'/vendor/autoload.php';
require_once dirname(dirname(__FILE__)).'/config/database.php';

class ProductController {


    public function index(){
        return Product::all();

    }
    
    public function  store($request){
    }

    public function  show(){}

    public function update(){}

    public function delete(){
        
    }


}
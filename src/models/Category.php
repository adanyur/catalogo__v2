<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;


class Category extends Model{
    protected $table = "tbl_category";


    public function product(){
        return $this->hasMany(Product::class,'category','id');
    }


    




}
<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;


class Order extends Model{

    protected $table = "order";
    protected $fillable = ['email', 'client','phone','coment','status'];

}
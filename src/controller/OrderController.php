<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'/vendor/autoload.php';
require_once dirname(dirname(__FILE__)).'/config/database.php';
use App\models\Order;

class OrderController {

    public function index(){
        return Order::all();
    }

    public function  store($request){

        $order = Order::create([
            'email' => $request['email'], 
            'client' => $request['client'],
            'phone' => $request['phone'],
            'coment' => $request['coment'],
            'status' => $request['status']            
        ]);

        if($order->save()){
            return 'SE GUARDO';
        }
        return 'NO SE GUARDO';
    }

    public function  show(){
        return Order::find($request['id']);     
    }

    public function update($request){
       $orderUpdate =  Order::find($request['id'])->update([
            'email' => $request['email'], 
            'client' => $request['client'],
            'phone' => $request['phone'],
            'coment' => $request['coment'],
            'status' => $request['status']   
        ]);

        if($orderUpdate){
            return 'SE ACTUALIZO';
        }
        return 'NO SE ACTUALIZO';
    }

    public function delete($request){
        return Order::find($request['id'])->delete();
    }

}
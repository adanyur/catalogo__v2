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
            return array('status'=>true,'message'=>'Se genero la orden');
        }
        return array('status'=>false,'message'=>'No se genero la orden');
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
            return json_encode(['status'=>true,'message'=>'Se actualizo la orden']);
        }
        return json_encode(['status'=>false,'message'=>'No se actualizo la orden']);
    }

    public function delete($request){
        $orderDelete = Order::find($request['id'])->delete();
        if($orderDelete){
            return json_encode(['status'=>true,'message'=>'Se elimino la orden']);
        }
        return json_encode(['status'=>true,'message'=>'No se elimino la orden']);
    }

}
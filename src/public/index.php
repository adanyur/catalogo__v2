<?php
header('Content-type: application/json');
require_once '../controller/OrderController.php';
$order = new OrderController();

$data  = json_decode(file_get_contents('php://input'), true);

$METHOD =  $_SERVER['REQUEST_METHOD'];

switch ($METHOD) {
    case "GET":
        die($order->index());
        break;
    case "POST":
        die($order->store($DATA));
        break;
    case "PUT":
        die($order->update($DATA));
        break;
    case "DELETE":
        die($order->delete($DATA));
        break;
}

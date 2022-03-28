<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'\controller\OrderController.php';
$order = new OrderController();
$data  = json_decode(file_get_contents('php://input'), true);

echo json_encode($data);

// switch ($_SERVER['REQUEST_METHOD']) {
//     case "GET":
//         die($order->index());
//         break;
//     case "POST":
//         die($order->store($data));
//         break;
//     case "PUT":
//         die($order->update($data));
//         break;
//     case "DELETE":
//         die($order->delete($data));
//         break;
//     default:
//         die($order->index());
// }
<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'\controller\CategoryController.php';
$order = new CategoryController();
$data  = json_decode(file_get_contents('php://input'), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        die($order->index());
        break;
    case "POST":
        die($order->store($data));
        break;
    case "PUT":
        die($order->update($data));
        break;
    case "DELETE":
        die($order->delete($data));
        break;
    default:
        die($order->index());
}
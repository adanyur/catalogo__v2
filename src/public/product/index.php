<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'\controller\ProductController.php';
$order = new ProductController();
$data  = json_decode(file_get_contents('php://input'), true);

$id = isset($_GET['idCategory']) ? $_GET['idCategory']:null;

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        die($order->index($id));
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
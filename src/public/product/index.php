<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'\controller\ProductController.php';
$product = new ProductController();
$data  = json_decode(file_get_contents('php://input'), true);

$id = isset($_GET['id']) ? $_GET['id']:null;
$parameters  = isset($_GET['parameters']) ? $_GET['parameters']:null;



switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        switch($parameters){
            case "SHOW":    
                die($product->show($id));
                break;
            default:
                die($product->index($id));
        }
        break;
    case "POST":
        die($product->store($data));
        break;
    case "PUT":
        die($product->update($data));
        break;
    case "DELETE":
        die($product->delete($data));
        break;
    default:
        die($product->index());
}
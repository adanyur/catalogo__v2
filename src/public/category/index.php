<?php
header('Content-type: application/json');
require_once dirname(dirname(dirname(__FILE__))).'\controller\CategoryController.php';
$category = new CategoryController();
$data  = json_decode(file_get_contents('php://input'), true);

$id = isset($_GET['id']) ? $_GET['id']:null;
$parameters  = isset($_GET['parameters']) ? $_GET['parameters']:null;

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        switch($parameters){
            case "SHOW":
                die($category->show($id)); 
                break;
            default:
                die($category->index($id));
        }
        break;
    case "POST":
        die($category->store($data));
        break;
    case "PUT":
        die($category->update($data));
        break;
    case "DELETE":
        die($category->delete($data));
        break;
    default:
        die($category->index());
}
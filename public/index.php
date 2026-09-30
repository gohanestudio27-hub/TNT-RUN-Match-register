<?php

require_once '../config/connection_DB.php';

$action = $_GET['action'] ?? 'main_page';

switch($action){

    case 'main_page':
        require_once '../src/view/main_page.php';
        break;

    default:
        http_response_code(404);
        echo "page not found";
        break;
}

?>
<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if($_SERVER['REQUEST_METHOD'] === 'POST'){
$json_players = file_get_contents("php://input");
$get_players = json_decode($json_players, true);

$player = $get_players['player'];

try{
    require_once __DIR__ . '/../../config/connection_DB.php';
    $register_player = $connection_db->prepare("INSERT INTO players(player_name) VALUES(?)");
    $register_player->bind_param("s", $player);
    $register_player->execute();
    $register_player-> close();
    exit;
}
catch(Throwable $error) {

echo json_encode(["error" => "Error al registrar jugador" . $error->getMessage()]);
}

}




?>
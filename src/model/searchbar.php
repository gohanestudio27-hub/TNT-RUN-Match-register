<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

header('Content-Type: application/json; charset=utf-8;');

try{


require_once __DIR__ . '/../../config/connection_DB.php';
$players_from_table = $connection_db->prepare("SELECT id, player_name FROM players WHERE is_valid = 1");
$players_from_table->execute();
$get_players = $players_from_table->get_result();

$search_bar_player = [];

while($row = $get_players->fetch_assoc()){
  $search_bar_player[] = [
    "id" => $row["id"],
    "player_name" => $row["player_name"]
  ];
}

echo json_encode($search_bar_player);
}
catch(Throwable $error){

  echo json_encode(["error" => "Error al obtener jugadores" . $error->getMessage()]);
}

?>
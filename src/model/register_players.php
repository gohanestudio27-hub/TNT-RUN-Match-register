<?php
ini_set('display_errors', '0');
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_players = file_get_contents('php://input');
    $get_players = json_decode($json_players, true);

    $player = $get_players['player'] ?? null;

    if (!is_string($player) || trim($player) === '') {
        http_response_code(400);
        header('Error: empty');
        echo json_encode(['error' => 'No ingresaste un nombre válido.']);
        exit;
    }

    $player = trim($player);

    try {
        require_once __DIR__ . '/../../config/connection_DB.php';

        $register_player = $connection_db->prepare(
            'INSERT INTO players (player_name) VALUES (?)'
        );
        $register_player->bind_param('s', $player);
        $register_player->execute();

        $new_player_id = $connection_db->insert_id;
        $register_player->close();

        echo json_encode([
            'success' => true,
            'id' => $new_player_id
        ]);
        exit;
    } catch (Throwable $error) {
        if (
            $error instanceof mysqli_sql_exception
            && $error->getCode() === 1062
        ) {
            http_response_code(409);
            header('Error: duplicate');
            echo json_encode([
                'error' => 'Ya hay un jugador con este nombre.'
            ]);
            exit;
        }

        http_response_code(500);
        error_log($error->getMessage());

        echo json_encode([
            'error' => 'Error al registrar jugador.'
        ]);
        exit;
    }
}
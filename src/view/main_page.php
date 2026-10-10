

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TNT RUN Registro de partidas</title>
    <link rel="icon" href="assets/img/185602_tnt_icon.ico" type="image/ico">
    
    
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Lexend+Deca:
wght@100..900&family=Martian+Mono:wght@100..800&family=Special+Gothic+Condensed+One&display=swap" rel="stylesheet">

<link rel="stylesheet" href="assets/CSS/indexCSS.css">
<link rel="stylesheet" href="assets/CSS/playersloggerCSS.css">

<script src="assets/JS/btn_add_and_cancel_new_player.js" defer></script>
<script src="assets/JS/search_bar.js" defer></script>
<script src="assets/JS/btn_categories.js" defer></script>

</head>
<body>
    <nav>
        <a>Manual</a>
        <a>Versus</a>
        <a>Registro</a>
        <a>Partidas</a>
    </nav>
    <main>

<div class="manual_data_logger_CONTENT">
    <form id="register_match" action="" method="">
   <div class="manual_data_logger">

    
    <div class="map_selector_CONTENT">
    <input type="text" name="map_selector" id="map_selector_id" placeholder="00" maxlength="2" required>
   
        <img id="flecha_derecha"  src="assets/img/flecha.png" alt="flecha derecha" >
        <img id="map_img" src="assets/img/2026-04-01_00.45.47.png">
        <img id="flecha_izquierda" src="assets/img/flecha.png" alt="flecha izquierda">
    </div>

    <div class="position_input">
        <p>Posición</p>
    <input type="text" inputmode="numeric" pattern="[1-32]"  name="position" id="position" placeholder="00" maxlength="2">
   </div>

    <div class="num_players_input">
        <p>Número de <br> jugadores</p>
    <input type="text" inputmode="numeric" pattern="[4-32]"  name="number_players" id="number_players" placeholder="00" maxlength="2">
    </div>
    
    <div class="match_day_num">
        <button id="new_day" type="button">Nueva sesión</button> 
        <p id="matches_day_num">1</p>
    </div>

    <div class="podium">
    <img id="more_info_podium">
    <p>Podio #</p>
    <input type="text" inputmode="numeric" name="podium_position" id="podium_position" placeholder="-">
    </div>
      </div> 

    <!--
 ─────────────────────────────────────────────────────────────────────────────
  ██████╗ ██╗      █████╗ ██╗   ██╗███████╗██████╗ ███████╗
  ██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗██╔════╝
  ██████╔╝██║     ███████║ ╚████╔╝ █████╗  ██████╔╝███████╗
  ██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗╚════██║
  ██║     ███████╗██║  ██║   ██║   ███████╗██║  ██║███████║
  ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝
 ─────────────────────────────────────────────────────────────────────────────
-->



<div class="players_logger_CONTENT">
    <div class="players_logger">

      <div class="search_bar_and_add_player">
         <button type="button"><img src="assets/img/add_player.png" id="add_player" width="40" height="40" alt="Agregar jugador"></button>
         <input type="text" id="search_bar_players" maxlength="50" name="search_player" placeholder="Buscar jugador">
         <button id="btn_cancel_new_player" type="button">Cancelar</button>
         <div class="desactive_search" id="search_results">

         </div>
       
      </div>






      <div class="btns_categories" id="categorie">
        <button type="button" id="win" data-categorie = 1>Le gane</button>
        <button type="button" id="lose" data-categorie = 2>Me gano</button>
        <button type="button" id="past" data-categorie = 3>Lo pase</button>
        <button type="button" id="opponent_past" data-categorie = 4>Me paso</button>
        <button type="button" id="draw" data-categorie = 5>Empate</button>
        <button type="button" id="bugger" data-categorie = 6>Bugger</button>
        <button type="button" id="sinnet" data-categorie = 7>Sinnet</button>
        <button type="button" id="not_play" data-categorie = 8>No jugo</button>
      </div>

       <p>Anomalias</p>
      <div class="btns_anomalies">

        <button type="button" id="corner">Corner</button>
        <button type="button" id="x2jump">Doble salto</button>
        <button type="button" id="smj">S.M.J</button>
        <button type="button" id="friendly_match">Amistoso</button>
        <button type="button" id="lagbank">Lagbank</button>

      </div>

      <div class="show_new_player_and_btn_add">
        <div id="show_new_player"></div>
        <button type="button">Guardar</button>
      </div>


    </div>
</div>

<div class="present_players_space">

</div>

    


 
   </form>
</div>
<!-- END OF: "manual_data_logger_CONTENT" -->

<div class="btn_register">
<button type="reset" form="register_match" id="btn_new_register">Nuevo registro</button>
<button type="submit" form="register_match">Registrar</button>
</div>




</main>
    
</body>
</html>
const input_new_player = document.getElementById("add_player")
const btn_register_new_player = document.getElementById("btn_register_new_player")
const search_bar_space = document.getElementById("search_bar_players")

btn_register_new_player.hidden = true;
let btn_cancel = false;


const player_register_error = document.getElementById("player_register_error");
player_register_error.hidden = true;

let player_message_timeout;

function players_error(error_type) {
    clearTimeout(player_message_timeout);

    player_register_error.classList.remove("register_player_succes");
    player_register_error.textContent = error_type;
    player_register_error.hidden = false;

    player_message_timeout = setTimeout(() => {
        player_register_error.hidden = true;
    }, 5000);
}

function players_succes() {
    clearTimeout(player_message_timeout);

    player_register_error.classList.add("register_player_succes");
    player_register_error.textContent = "Jugador agregado con éxito";
    player_register_error.hidden = false;

    player_message_timeout = setTimeout(() => {
        player_register_error.hidden = true;
    }, 5000);
}


input_new_player.addEventListener("click", function(event) {

    if(!btn_cancel){

     btn_register_new_player.hidden = false;
     search_bar_space.placeholder = "Agregar nuevo jugador";
     search_bar_space.classList.add("new_player");
     input_new_player.src = "assets/img/cancel_register.png"
     btn_cancel = true;

     }
     else if(btn_cancel) {
          btn_cancel = false;
          search_bar_space.classList.remove("new_player");
          search_bar_space.placeholder = "Buscar jugador";    
          btn_register_new_player.hidden = true ;
          input_new_player.src = "assets/img/add_player.png";
     }
}
)

btn_register_new_player.addEventListener("click", async () => {
    const new_player_name = search_bar_space.value.trim();

    btn_register_new_player.disabled = true;

    try {
        const response = await fetch("index.php?action=register_players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ player: new_player_name })
        });

        const header_error = response.headers.get("Error");
        const data = await response.json();

        if (header_error === "duplicate") {
            players_error("Ya hay un jugador con este nombre");
            return;
        }

        if (header_error === "empty") {
            players_error("No ingresaste un nombre válido");
            return;
        }

        if (!response.ok || data.success !== true) {
            players_error(data.error || "Error al registrar jugador");
            return;
        }



         players_results.push({
           id: data.id,
           player_name: new_player_name
         });

        players_succes();

        search_bar_space.value = "";
        btn_cancel = false;
        search_bar_space.classList.remove("new_player");
        search_bar_space.placeholder = "Buscar jugador";
        btn_register_new_player.hidden = true;
        input_new_player.src = "assets/img/add_player.png";
    } catch (error) {
        console.error("Players register error", error);
        players_error(
            "No se pudo confirmar el registro. Revisa la lista antes de reintentar."
        );
        
    } finally {
        btn_register_new_player.disabled = false;
    }
});






     




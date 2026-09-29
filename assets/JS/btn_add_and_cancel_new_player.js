const input_new_player = document.getElementById("add_player")
const btn_cancel_new_player = document.getElementById("btn_cancel_new_player")
const search_bar_space = document.getElementById("search_bar_players")

btn_cancel_new_player.hidden = true

input_new_player.addEventListener("click", function(event) {
btn_cancel_new_player.hidden = false;
search_bar_space.placeholder = "Agregar nuevo jugador";
search_bar_space.classList.add("new_player");

btn_cancel_new_player.addEventListener("click", function(event) {
    search_bar_space.classList.remove("new_player");
    search_bar_space.placeholder = "Buscar jugador";    
    btn_cancel_new_player.hidden = true ;
})
}
)

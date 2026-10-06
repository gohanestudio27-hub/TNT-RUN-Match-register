const input_search_bar = document.getElementById("search_bar_players");
const results_space = document.getElementById("search_results");
const show_new_player = document.getElementById("show_new_player");

let players_results = [];
let search_bar_players_results = []

fetch('index.php?action=get_players')
.then(response => {
if (!response.ok) {
  throw new Error(`Error HTTP ${response.status}`);
} return response.json();

})
.then(data => {players_results = data
    console.log("Jugadores cargados desde la BD:", players_results);
})
.catch(error => console.error('Players load error', error));

input_search_bar.addEventListener("input", (e) =>{
const query_search = e.target.value.toLowerCase().trim();

results_space.innerHTML = '';

if (query_search === '') {
    results_space.classList.remove("activate_search");
    results_space.classList.add("desactive_search");
    return;
  }

const players_filter = players_results.filter(player => player.player_name.toLowerCase().includes(query_search));

if(players_filter.length >  0){
    results_space.classList.remove("desactive_search");
    results_space.classList.add("activate_search");



    players_filter.forEach(player => {
    const player_show_container = document.createElement("p");
    player_show_container.textContent = player.player_name;
    results_space.appendChild(player_show_container);

    })

} else {
    results_space.classList.remove("activate_search");
    results_space.classList.add("desactive_search");
}
})

document.addEventListener("click", (e) =>{

if(!results_space.contains(e.target) && !input_search_bar.contains(e.target)){
results_space.classList.remove("activate_search");
results_space.classList.add("desactive_search");
}


})







































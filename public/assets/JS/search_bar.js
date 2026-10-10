const input_search_bar = document.getElementById("search_bar_players");
const results_space = document.getElementById("search_results");
const show_new_player = document.getElementById("show_new_player");

let players_results = [];
let selected_player = [];
let new_player_id = null

fetch('index.php?action=get_players')
.then(response => {
if (!response.ok) {
  throw new Error(`Error HTTP ${response.status}`);
} return response.json();

})
.then(data => {players_results = data;})
.catch(error => console.error('Players load error', error));


input_search_bar.addEventListener("input", (e) =>{
const query_search = e.target.value.toLowerCase().trim();

results_space.innerHTML = '';
input_search_bar.value = "";

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
    player_show_container.dataset.id = player.id;
    results_space.appendChild(player_show_container);




    })

} else {
    results_space.classList.remove("activate_search");
    results_space.classList.add("desactive_search");
}

})

results_space.addEventListener("click", (e) => {
    e.stopPropagation();

if (e.target && e.target.tagName === "P") {

    show_new_player.innerHTML = "";


let player_name_target = e.target.textContent;
let new_player_id = e.target.dataset;
console.log(new_player_id);

    input_search_bar.value = player_name_target;

const new_player_space = document.createElement("p");
new_player_space.textContent = player_name_target

show_new_player.classList.add("player_in");

show_new_player.appendChild(new_player_space);

    results_space.classList.remove("activate_search");
    results_space.classList.add("desactive_search");

   if(typeof white_font_player_bugger === "function" && typeof categorie_num !== "undefined"){
    white_font_player_bugger();
   }
    }
})



document.addEventListener("click", (e) =>{

if(!results_space.contains(e.target) && !input_search_bar.contains(e.target)){
results_space.classList.remove("activate_search");
results_space.classList.add("desactive_search");

}


})







































const input_new_player = document.getElementById("add_player")
const btn_register_new_player = document.getElementById("btn_register_new_player")
const search_bar_space = document.getElementById("search_bar_players")

btn_register_new_player.hidden = true
let btn_cancel = false;

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


     btn_register_new_player.addEventListener("click", () => {

        let new_player_name = search_bar_space.value
              console.log(new_player_name);
       fetch('index.php?action=register_players', {
       method: 'POST',
       headers:  {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({ player: new_player_name})
       }
      )

       .then(response => response.json())
       .then(data => {
        if(data.error){
          console.error(data.error);
        } else {
          console.log("bien")
        }
       })

       fetch('index.php?action=get_players')
       .then(response => {
if (!response.ok) {
  throw new Error(`Error HTTP ${response.status}`);
} return response.json();

})
.catch(error => console.error('Players load error', error));
    })





        
    

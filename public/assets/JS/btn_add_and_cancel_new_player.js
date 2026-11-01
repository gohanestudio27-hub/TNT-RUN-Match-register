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
          console.log("player register success")
        }

        if(data.success){
        let id_of_new_player = data.id;
        console.log(id_of_new_player);
        } else {
          console.log("error con el id del usuario")
        }

        if(players_results !== undefined){
          players_results.push({
            id: data.id,
            player_name: new_player_name
          })
        }

        search_bar_space.value = "";
        btn_cancel = false;
        search_bar_space.classList.remove("new_player");
        search_bar_space.placeholder = "Buscar jugador";    
        btn_register_new_player.hidden = true;
        input_new_player.src = "assets/img/add_player.png";

       })
.catch(error => console.error('Players load error', error));

    })


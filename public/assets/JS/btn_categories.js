const categories = document.getElementById("categorie");


let categorie_num = null;

function white_font_player_bugger(){
    const player_p = show_new_player.querySelector("p");
    if(!player_p) return;

    if(categorie_num == 6){
      player_p.style.color = "white";
    } else {
      player_p.style.color = "black";
    }
}

categories.addEventListener("click", (e) => {

    if(categories.contains(e.target) && e.target.tagName === "BUTTON"){

        const btn_color = window.getComputedStyle(e.target);
        let color_for_background = btn_color.backgroundColor;
        show_new_player.style.backgroundColor = color_for_background;

       categorie_num = e.target.dataset.categorie;
       console.log(typeof(categorie_num));

       white_font_player_bugger()
       update_anomalies_availability();


    }


});

/**
 * ───────────────────────────────────────────────────────────────────────────────────────────────────
 *   █████╗ ███╗   ██╗ ██████╗ ███╗   ███╗ █████╗ ██╗     ██╗███████╗███████╗
 *  ██╔══██╗████╗  ██║██╔═══██╗████╗ ████║██╔══██╗██║     ██║██╔════╝██╔════╝
 *  ███████║██╔██╗ ██║██║   ██║██╔████╔██║███████║██║     ██║█████╗  ███████╗
 *  ██╔══██║██║╚██╗██║██║   ██║██║╚██╔╝██║██╔══██║██║     ██║██╔══╝  ╚════██║
 *  ██║  ██║██║ ╚████║╚██████╔╝██║ ╚═╝ ██║██║  ██║███████╗██║███████╗███████║
 *  ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝╚══════╝
 * ───────────────────────────────────────────────────────────────────────────────────────────────────
 */

const anomalies_contains = document.getElementById("anomalies")
const anomalies_space_id = document.getElementById("anomalies_space_id")

const btn_corner = document.getElementById("corner");
const btn_smj = document.getElementById("smj");
const btn_x2jump = document.getElementById("x2jump");
const btn_lagbank = document.getElementById("lagbank");
const btn_friendly= document.getElementById("friendly_match");

const anomalies = new Set()

function anomalies_blocked() {
    return [6, 8].includes(Number(categorie_num)); 
}

function update_anomalies_availability() {
    const blocked = anomalies_blocked();

    const buttons = [
        btn_corner,
        btn_smj,
        btn_x2jump,
        btn_lagbank,
        btn_friendly
    ];

    buttons.forEach(button => {
        button.disabled = blocked; 
    });

    if (blocked) {
        anomalies_space_id.innerHTML = "";

        anomalies.clear();

        for (const key of Object.keys(anomalies_space_id.dataset)) {
            delete anomalies_space_id.dataset[key];
        }
    }
}

btn_corner.addEventListener("click", () =>{

   if (anomalies_blocked()) {
        return;
   }

  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.corner == true){
  const corner_img = document.createElement("img");
  corner_img.src = "assets/img/anomalies_img/corner_icon.png";
  corner_img.title = "Corner"
  anomalies_space_id.dataset.corner = true;
  anomalies_space_id.appendChild(corner_img)
  
  const anomalie_id = Number(btn_corner.dataset.anomalie);

  anomalies.add(anomalie_id)
}
})

btn_smj.addEventListener("click", () =>{

   if (anomalies_blocked()) {
        return;
   }


  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.smj == true){
  const smj_img = document.createElement("img");
  smj_img.src = "assets/img/anomalies_img/smj_icon.png";
  smj_img.title = "Sospecha de mal juego intencionado"
  anomalies_space_id.dataset.smj = true;
  anomalies_space_id.appendChild(smj_img)

  const anomalie_id = Number(btn_smj.dataset.anomalie);

  anomalies.add(anomalie_id)
}
})

btn_x2jump.addEventListener("click", () =>{

   if (anomalies_blocked()) {
        return;
   }


  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.x2jump == true){
  const x2jump_img = document.createElement("img");
  x2jump_img.src = "assets/img/anomalies_img/x2jump_icon.png";
  x2jump_img.title = "Doble Salto";
  anomalies_space_id.dataset.x2jump = true;
  anomalies_space_id.appendChild(x2jump_img)

  const anomalie_id = Number(btn_x2jump.dataset.anomalie);

  anomalies.add(anomalie_id)
}
})

btn_lagbank.addEventListener("click", () =>{

   if (anomalies_blocked()) {
        return;
   }


  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.lagbank == true){
  const lagbank_img = document.createElement("img");
  lagbank_img.src = "assets/img/anomalies_img/sinnet_icon.png";
  lagbank_img.title = "Lagbank"
  anomalies_space_id.dataset.lagbank = true;
  anomalies_space_id.appendChild(lagbank_img)

  const anomalie_id = Number(btn_lagbank.dataset.anomalie);

  anomalies.add(anomalie_id)
}
})

btn_friendly.addEventListener("click", () =>{

   if (anomalies_blocked()) {
        return;
   }

  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.friendly == true){
  const friendly_img = document.createElement("img");
  friendly_img.src = "assets/img/anomalies_img/friendly_icon.png";
  friendly_img.title = "Partida Amistosa"
  anomalies_space_id.dataset.friendly = true;
  anomalies_space_id.appendChild(friendly_img)

  const anomalie_id = Number(btn_friendly.dataset.anomalie);

  anomalies.add(anomalie_id)
  console.log(anomalies)
}
})
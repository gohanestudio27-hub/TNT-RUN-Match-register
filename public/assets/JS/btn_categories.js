const categories = document.getElementById("categorie");


let categorie_num = null;

function white_font_player_bugger(){
    const player_p = show_new_player.querySelector("p");
    if(!player_p) return;

    if(categorie_num == 6){
      player_p.classList.add("bugger_font_white");
    } else {
      player_p.classList.remove("bugger_font_white");
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

    }


});

/**
 * ───────────────────────────────────────────────────────────────────────────────────────────────────
 *  █████╗ ███╗   ██╗ ██████╗ ███╗   ███╗ █████╗ ██╗     ██╗███████╗███████╗
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


btn_corner.addEventListener("click", () =>{


  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.corner == true){
  const corner_img = document.createElement("img");
  corner_img.src = "assets/img/anomalies_img/corner_icon.png";
  anomalies_space_id.dataset.corner = true;
  anomalies_space_id.appendChild(corner_img)

  let anomalie_id = btn_corner.dataset

  anomalies.add(anomalie_id)
}
})

btn_smj.addEventListener("click", () =>{


  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.smj == true){
  const smj_img = document.createElement("img");
  smj_img.src = "assets/img/anomalies_img/smj_icon.png";
  anomalies_space_id.dataset.smj = true;
  anomalies_space_id.appendChild(smj_img)

  let anomalie_id = btn_smj.dataset

  anomalies.add(anomalie_id)
}
})

btn_x2jump.addEventListener("click", () =>{


  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.x2jump == true){
  const x2jump_img = document.createElement("img");
  x2jump_img.src = "assets/img/anomalies_img/x2jump_icon.png";
  anomalies_space_id.dataset.x2jump = true;
  anomalies_space_id.appendChild(x2jump_img)

  let anomalie_id = btn_x2jump.dataset

  anomalies.add(anomalie_id)
}
})

btn_lagbank.addEventListener("click", () =>{


  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.lagbank == true){
  const lagbank_img = document.createElement("img");
  lagbank_img.src = "assets/img/anomalies_img/sinnet_icon.png";
  anomalies_space_id.dataset.lagbank = true;
  anomalies_space_id.appendChild(lagbank_img)

  let anomalie_id = btn_lagbank.dataset

  anomalies.add(anomalie_id)
}
})

btn_friendly.addEventListener("click", () =>{


  if(anomalies_space_id.children.length < 5 && !anomalies_space_id.dataset.friendly == true){
  const friendly_img = document.createElement("img");
  friendly_img.src = "assets/img/anomalies_img/friendly_icon.png";
  anomalies_space_id.dataset.friendly = true;
  anomalies_space_id.appendChild(friendly_img)

  let anomalie_id = btn_friendly.dataset

  anomalies.add(anomalie_id)
  console.log(anomalies)
}
})
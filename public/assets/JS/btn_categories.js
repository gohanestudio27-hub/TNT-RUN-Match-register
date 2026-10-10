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
        show_new_player.style.boxShadow =  `0 0 0 3px ${color_for_background}`;

       categorie_num = e.target.dataset.categorie;
       console.log(typeof(categorie_num));

       white_font_player_bugger()

    }


});

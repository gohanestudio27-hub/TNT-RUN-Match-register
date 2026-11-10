const map_img_space = document.getElementById("map_img");
const right_arrow = document.getElementById("right_arrow");
const left_arrow = document.getElementById("left_arrow");

const maps = [
    {
name: "constantine",
src: "assets/img/tnt_maps/constantine.png",
num: 1
},
{
name: "desert",
src: "assets/img/tnt_maps/desert.png",
num: 11
},
{
name: "arena",
src: "assets/img/tnt_maps/arena.png",
num: 8
},
{
name: "button",
src: "assets/img/tnt_maps/button.png",
num: 4
},
{
name: "catedral",
src: "assets/img/tnt_maps/catedral.png",
num: 7
},
{
name: "cloud",
src: "assets/img/tnt_maps/cloud.png",
num: 5
},
{
name: "escarlata",
src: "assets/img/tnt_maps/escarlata.png",
num: 15
},
{
name: "fabrica",
src: "assets/img/tnt_maps/fabrica.png",
num: 19
},
{
name: "fantasy",
src: "assets/img/tnt_maps/fantasy.png",
num: 10
},
{
name: "fortaleza",
src: "assets/img/tnt_maps/fortaleza.png",
num: 16
},
]


map_img_space.src = maps[0].src;
let i = 0;

right_arrow.addEventListener("click", () => {
  
    i++; 
    if (i >= maps.length) {
        i = 0;
    }

    map_img_space.src = maps[i].src;
});


left_arrow.addEventListener("click", () => {
    i--; 
    
    if (i < 0) {
        i = maps.length - 1;
    }

    map_img_space.src = maps[i].src;
});
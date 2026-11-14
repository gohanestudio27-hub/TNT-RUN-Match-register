const map_img_space = document.getElementById("map_img");
const right_arrow = document.getElementById("right_arrow");
const left_arrow = document.getElementById("left_arrow");
const map_selector_id = document.getElementById("map_selector_id");
const map_name_space = document.getElementById("map_name");

const maps = [
  {
    name: "Constantine",
    src: "assets/img/tnt_maps/constantine.png",
    num: 1
  },
  {
    name: "World",
    src: "assets/img/tnt_maps/world.png",
    num: 2
  },
  {
    name: "Glaciar",
    src: "assets/img/tnt_maps/glaciar.png",
    num: 3
  },
  {
    name: "Button",
    src: "assets/img/tnt_maps/button.png",
    num: 4
  },
  {
    name: "Cloud",
    src: "assets/img/tnt_maps/cloud.png",
    num: 5
  },
  {
    name: "Helicopter",
    src: "assets/img/tnt_maps/helicopter.png",
    num: 6
  },
  {
    name: "Catedral",
    src: "assets/img/tnt_maps/catedral.png",
    num: 7
  },
  {
    name: "Arena",
    src: "assets/img/tnt_maps/arena.png",
    num: 8
  },
  {
    name: "Tower",
    src: "assets/img/tnt_maps/tower.png",
    num: 9
  },
  {
    name: "Fantasy",
    src: "assets/img/tnt_maps/fantasy.png",
    num: 10
  },
  {
    name: "Desert",
    src: "assets/img/tnt_maps/desert.png",
    num: 11
  },
  {
    name: "Simple",
    src: "assets/img/tnt_maps/simple.png",
    num: 12
  },
  {
    name: "Reloj",
    src: "assets/img/tnt_maps/reloj.png",
    num: 13
  },
  {
    name: "Fuste",
    src: "assets/img/tnt_maps/fuste.png",
    num: 14
  },
  {
    name: "Escarlata",
    src: "assets/img/tnt_maps/escarlata.png",
    num: 15
  },
  {
    name: "Fortaleza",
    src: "assets/img/tnt_maps/fortaleza.png",
    num: 16
  },
  {
    name: "Pedernal",
    src: "assets/img/tnt_maps/pedernal.png",
    num: 17
  },
  {
    name: "Jungla",
    src: "assets/img/tnt_maps/jungla.png",
    num: 18
  },
  {
    name: "Fabrica",
    src: "assets/img/tnt_maps/fabrica.png",
    num: 19
  }
];

map_name_space.textContent = maps[0].name;
map_img_space.src = maps[0].src;
map_selector_id.value = maps[0].num;


let i = 0;

right_arrow.addEventListener("click", () => {
  
    i++; 
    if (i >= maps.length) {
        i = 0;
    }

    map_name_space.textContent = maps[i].name;
    map_img_space.src = maps[i].src;
    map_selector_id.value = maps[i].num;

});


left_arrow.addEventListener("click", () => {
    i--; 
    
    if (i < 0) {
        i = maps.length - 1;
    }

    map_name_space.textContent = maps[i].name;
    map_img_space.src = maps[i].src;
    map_selector_id.value = maps[i].num;

});

map_selector_id.addEventListener("keyup", () => {

    if(map_selector_id.value == ![1-19]){
        map_selector_id.value == ""
    }

    map_name_space.textContent = maps[map_selector_id.value - 1].name;
    map_img_space.src = maps[map_selector_id.value - 1].src;
    map_selector_id.value = maps[map_selector_id.value - 1].num;
})
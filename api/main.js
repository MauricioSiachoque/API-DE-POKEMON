import { saludar, buscarPokemon, buscarPokemonpornombre } from "./controllers/controllers.js"
  
let root = document.getElementById("root");                  // para leer en el html o llamarlo 

async function mostrarpokemon(){
    let arrayDepokemones = await buscarPokemon();
    console.log("Estoy dentro de funcion ejemplo", arrayDepokemones); 

    let html ="";
    arrayDepokemones.forEach((pokemon) => {  
      let cardPokemon =  `<div class= 'card'>                                               
                             <span>${pokemon.nombre}</span>                       
                             <span>${pokemon.id}</span>  
                             <span>${pokemon.tipos[0].type.name}</span>
                             <img src='${pokemon.imagen}'/>            
                         </div>`;

                                                                        // let cardpokemon: es para leer cada pokemon //
                                                                        //  para tomar el objeto pokemon, y los busca las caractersicticas para renderizar en pantalla
        html += cardPokemon;          
    });

     root.innerHTML += html;

}

mostrarpokemon();

/// main es el renderizado
/// add event listener que va a ver que escribo en el input y ejecuta el buscar por nombre

let botondebusqueda = document.getElementById("buscar-pokemon")
let barradebusqueda = document.getElementById("barra-pokemon")



botondebusqueda.addEventListener("click", async function(event){
    event.preventDefault()            // evito que se refresque la pagina luego del click
   // console.log(barradebusqueda.value);
    let pokemonbuscado = await buscarPokemonpornombre(barradebusqueda.value)

          let cardPokemon =  `<div class= 'card'>                                               
                                  <span>${pokemonbuscado.nombre}</span>                       
                                  <span>${pokemonbuscado.id}</span>  
                                  <span>${pokemonbuscado.tipos[0].type.name}</span>
                                  <img src='${pokemonbuscado.imagen}'/>            
                              </div>`;

           root.innerHTML = cardPokemon;                                                                   
           
    });

    


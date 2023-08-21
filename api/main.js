import { saludar, buscarPokemon } from ".//controllers.js"
  
saludar()
buscarPokemon()


let root = document.getElementById("root");                  // para leer en el html o llamarlo 

async function render(){
    let pokemones = await buscarPokemon(); 

    let html ="";

    pokemones.forEach((pokemon) => {  
      let cardpokemon =  `<div>                                               
                             <span>${pokemon.name}</span>                       
                            <span>${pokemon.url}</span>                        
                        </div>`;

                                                                        // let cardpokemon: es para leer cada pokemon //
                                                                        //  para tomar el objeto pokemon, y los busca las caractersicticas para renderizar en pantalla
                                                                        //  para tomar el objeto pokemon, y los busca las caractersicticas para renderizar en pantalla
    html += cardpokemon;          
    });

     root.innerHTML += html;

}

render();

/// main es el renderizado

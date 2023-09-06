export function saludar () {
    console.log("hola soy mauricio");
}

///llamados a la API

export async function buscarPokemon(url) {                                // se coloco url ya que es para la el boton siguiente o anterior
   
        let data = await fetch( url || `https://pokeapi.co/api/v2/pokemon/`);       //para buscar el api

        let dataParseada = await data.json();                   // para parsear, se convierte a jeison

       // console.log(dataParseada.next);                        // array con objetos    [{url},{},{}] y busca uno por uno
        let arrayDepokemones = [];

        for (let i = 0; i < dataParseada.results.length; i++) {                 // el array se cambia por el data.parseada
            const pokemon = dataParseada.results[i];                            // y el index se cambia por i
            
          //  console.log("i=",i);
           // console.log("pokemon que estamos iterando", pokemon.url);          //pokemon.url, guarda todas las urls
            let pokemonData = await fetch(pokemon.url);                          // hacer llamado por cada pokemon 
            let pokemonParseado = await pokemonData.json();
                                                             // llamado de los obejtos, pokemon parseado
            let pokemonFormateado = {                           
                id: pokemonParseado.id,                      // en este let, se usara los datos que quiero mostrar
                nombre: pokemonParseado.name,  
                tipos: pokemonParseado.types,            //aca se usa así, por que hay varios tipos en la api  
                imagen: pokemonParseado.sprites.other.dream_world.front_default,        // sprites.other, ya son las direcciones de donde vienen las imagenes del api
            };
             arrayDepokemones.push(pokemonFormateado);
           
        }
             return {
                previous: dataParseada.previous,
                next: dataParseada.next,
                arrayDepokemones: arrayDepokemones,
          };
                       
}

      

// para el boton de busqueda

export async function buscarPokemonpornombre(nombre){

    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);    // se coloca nombre, para realizar la busqueda de todos los elementos
    let pokemonParseado = await data.json(); 

        let pokemonFormateado = {                           
        id: pokemonParseado.id,                    
        nombre: pokemonParseado.name,  
        tipos: pokemonParseado.types,            
        imagen: pokemonParseado.sprites.other.dream_world.front_default,  
        };
        //console.log(pokemonFormateado);
        return pokemonFormateado;
}



// para realizar la siguientes paginas o anteriores

export async function paginaSiguiente(){}



export async function paginaAnterior(){}

/* ejecuciones de prueba */

//saludar();
//buscarPokemon();



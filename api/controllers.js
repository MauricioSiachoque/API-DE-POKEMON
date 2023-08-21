export function saludar () {
    console.log("hola soy mauricio");
}

///llamados a la API

export async function buscarPokemon(){
 
        let data = await fetch("https://pokeapi.co/api/v2/pokemon/");       //para buscar el api

        let dataParseada = await data.json();                   // para parsear, se convierte a jeison 

        console.log(dataParseada);
        return dataParseada.results;               // results: es para validar sola una cierta informacion y no toda
}

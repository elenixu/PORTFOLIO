
var index = 1;

document.querySelector(".button_prev").addEventListener("click", previous);
document.querySelector(".button_next").addEventListener("click", next);

getPokemon(index);

function getPokemon(idPokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/'+idPokemon;
    fetch(url)
    .then(response => response.json())
    .then(function(pokemon){
       //document.querySelector(".right_screen").innerText = pokemon.name;
       let image = document.createElement("img");
       let name = document.createElement("p");
       let height = document.createElement("p");
       let weight = document.createElement("p");
       image.src = pokemon.sprites.front_default;
       image.className = "pokemon_sprite";
        name.innerText = "Name : "+pokemon.name;
        height.innerText = "Height : "+pokemon.height+"0 cm";
        weight.innerText = "Weight : "+pokemon.weight+" kg";

       document.querySelector(".left_screen").innerHTML = "";
       document.querySelector(".right_screen").innerHTML = "";
       document.querySelector(".left_screen").appendChild(image);
       document.querySelector(".right_screen").appendChild(name);
       document.querySelector(".right_screen").appendChild(height);
       document.querySelector(".right_screen").appendChild(weight);
        
    })
}

function previous(){
    if(index > 1){
        index = index - 1;
        getPokemon(index);
    }
}

function next(){
    if(index < 151){
        index = index + 1;
        getPokemon(index);
    }
}


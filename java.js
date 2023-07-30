let image = document.querySelector(".img");
let pokemon = document.querySelector(".pokemon-name");
let description = document.querySelector(".desc");
let btn = document.querySelector(".btn");

const pokemonALL = [
    { 
        pokemonName: "Charizard",
        details: "Charizard is a Fire/Flying type Pokémon introduced in Generation 1. Charizard is a large dragon-like Pokémon, mainly orange in color. It has two large wings, the underside of which are turquoise. Like Charmander and Charmeleon, it has a flame at the end of its tail."

    },
    {
        pokemonName: "Pikachu",
        details: "Pikachu (Japanese: ピカチュウ Pikachu) is an Electric-type Pokémon introduced in Generation I. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone. In Alola, Pikachu evolves into Alolan Raichu when exposed to a Thunder Stone. Additionally, Pikachu has four forms: Cosplay Pikachu, Pikachu in a cap, the partner Pikachu, and Gigantamax Pikachu. Cosplay Pikachu, Pikachu in a cap, the partner Pikachu, and Pikachu with the Gigantamax Factor cannot evolve. The starter Pikachu from Pokémon Yellow will refuse to evolve into Raichu unless it is traded and evolved on another save file. Pikachu is popularly known as the mascot of the Pokémon franchise and one of Nintendo's major mascots."
    },
    {
        pokemonName: "Squirtle",
        details: "Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36. Along with Bulbasaur and Charmander, Squirtle is one of the three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen."
    },
];


btn.addEventListener('click', function(){

let random = Math.floor(Math.random() * pokemonALL.length);


    image.setAttribute("src", pokemonALL[random].pokemonName + ".png");

    pokemon.innerText = pokemonALL[random].pokemonName;
    description.innerText = pokemonALL[random].details;
    
    
})

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemons){
    return `
        <li class="pokemon">
                <span class="number">#${pokemons.order}</span>
                <span class="name">${pokemons.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemons.types).join('')}
                    </ol>
                    <img src="${pokemons.sprites.other.dream_world.front_default}" alt="${pokemons.name}">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
      
})

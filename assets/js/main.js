console.log('sucesso!');

    const offset = 0;
    const limit = 10;
    const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemons){
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemons.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemons.name}">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {
        for (let index = 0; index < pokemons.length; index++) {
            const pokemon = pokemons[index];
            console.log
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }

    })

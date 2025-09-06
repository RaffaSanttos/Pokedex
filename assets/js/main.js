const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 12;
let offset = 0;

function loadPokemonItens(offset, limit) { 
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon => `
            <li class="pokemonCard pokemon ${pokemon.type}" data-id="${pokemon.number}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `)).join('')
    })
}

pokemonList.addEventListener('click', (event) => {
    const card = event.target.closest('.pokemonCard')
    if (card) {
        const id = card.dataset.id
        window.location.href = `pokemonSelect.html?id=${id}`
    }
})

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    
    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

})
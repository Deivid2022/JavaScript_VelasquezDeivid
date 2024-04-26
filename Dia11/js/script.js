function getPokemonInfo(pokemonNameOrId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Página fuera de servicio');
            }
            return response.json();
        })
        .then(data => {
            const pokemonid = data.id;
            const pokemonName = capitalizeFirstLetter(data.name);
            const pokemonAnimatedSpriteUrl = data.sprites.versions['generation-v']['black-white'].animated.front_default;
            const imagen = `./storage/img/pikachu.png`;

            document.getElementById('pokemonid').textContent = `${pokemonid} - ${pokemonName}`;
            if (pokemonAnimatedSpriteUrl !== null) {
                document.getElementById('pokemonImage').src = pokemonAnimatedSpriteUrl;
            } else {
                document.getElementById('pokemonImage').src = imagen;
            }
        })
        .catch(error => {
            console.error('Ocurrió un problema con tu función: ', error);
        });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const pokemonInput = document.getElementById('pokemonInput');
const clearBtn = document.getElementById('clearBtn');
const prevBtn = document.querySelector('.button1');
const nextBtn = document.querySelector('.button2');


clearBtn.addEventListener('click', function() {
  pokemonInput.value = '';
});


pokemonInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    getPokemonInfo(pokemonInput.value.toLowerCase());
    pokemonInput.value = '';
  }
});


prevBtn.addEventListener('click', function() {
  const currentPokemonId = parseInt(document.getElementById('pokemonid').textContent);
  const prevPokemonId = currentPokemonId - 1;
  if (prevPokemonId > 0) {
    getPokemonInfo(prevPokemonId);
  }
});


nextBtn.addEventListener('click', function() {
  const currentPokemonId = parseInt(document.getElementById('pokemonid').textContent);
  const nextPokemonId = currentPokemonId + 1;
  getPokemonInfo(nextPokemonId);
});
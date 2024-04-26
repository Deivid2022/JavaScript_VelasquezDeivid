function getPokemonInfo() {
            const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Pagina fuera de servicio');
                    }
                    return response.json();
                })
                .then(data => {
                    const pokemonid = data.id;
                    const pokemonName = data.name;
                    const pokemonAnimatedSpriteUrl = data.sprites.versions['generation-v']['black-white'].animated.front_default;

                    document.getElementById('pokemonid').textContent = `${pokemonid}`
                    document.getElementById('pokemonName').textContent = `${pokemonName}`;
                    document.getElementById('pokemonImage').src = pokemonAnimatedSpriteUrl;
                })
                .catch(error => {
                    console.error('Ocurrio un problema con tu función: ', error);
                });
        }

// Obtener el input
var input = document.getElementById("pokemonInput");

// Agregar un event listener para detectar cuando se presiona Enter
input.addEventListener("keyup", function(event) {
    // Verificar si la tecla presionada es Enter (código 13)
    if (event.keyCode === 13) {
        // Llamar a la función getPokemonInfo()
        getPokemonInfo();
    }
});
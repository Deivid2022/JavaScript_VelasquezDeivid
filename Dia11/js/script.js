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
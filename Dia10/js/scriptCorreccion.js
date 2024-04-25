document.getElementById('apiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('idInput').value;
    const apiUrl = 'https://swapi.py4e.com/api/people/';

    fetch(apiUrl + '/' + id)
        .then(response => response.json())
        .then(data => {
            const template = `
            <table class="table table-bordered border-primary table-secondary">
                    <th><strong>Name:</strong>
                    <th>${data.name}</th>
                <tr>
                    <th><strong>Height:</strong> </th>
                    <th>${data.height}</th>
                </tr> 
                <tr>
                    <th><strong>mass:</strong></th>
                    <th>${data.mass}</th>
                </tr>
                <tr>
                    <th><strong>Hair color:</strong></th>
                    <th>${data.hair_color}</th>
                </tr>
                <tr>
                    <th><strong>skin color:</strong></th>
                    <th>${data.skin_color}</th>
                </tr>
                <tr>
                    <th><strong>eye color:</strong></th>
                    <th>${data.eye_color}</th>
                </tr>
                <tr>
                    <th><strong>Birthday:</strong> </th>
                    <th>${data.birth_year}</th>
                </tr>
                <tr>
                    <th><strong>Gender:</strong></th>
                    <th>${data.gender}</th>
                </tr>
                <tr>
                    <th><strong>Born world:</strong></th>
                    <th><p id="homeworldInfo"></p></th> 
                </tr>
                <tr>
                    <th><strong>Movies:</strong></th>
                    <th><p id="filmsList"></p></th>
                </tr>
                <tr>
                    <th><strong>Species:</strong></th>
                    <th><p id="speciesList"></p></th>
                </tr>
                <tr>
                    <th><strong>vehicles:</strong></th>
                    <th><p id="vehicleslist"></p></th>
                </tr>
                <tr>
                <tr>
                    <th><strong>Starships:</strong></th>
                    <th><p id="starshipsList"></p></th>
                </tr>
                <tr>
                    <th><strong>Created:</strong> </th>
                    <th>${data.created}</th>
                </tr>
                <tr>
                    <th><strong>last edited:</strong></th>
                    <th>${data.edited}</th>
                </tr>
                <tr>
                    <th><strong>URL:</strong> </th>
                    <th>${data.url}</th>
                </tr>
                
            `;

            document.getElementById('result').innerHTML = template;

            const fetchAndDisplayInfo = (url, listId) => {
                fetch(url)
                    .then(response => response.json())
                    .then(info => {
                        for (const key in info) {
                            if (info.hasOwnProperty(key)) {
                                const value = info[key];
                                // Verificar si el valor no es una lista
                                if (!Array.isArray(value)) {
                                    const infoItem = document.createElement('li');
                                    infoItem.textContent = `${key}: ${value}`;
                                    document.getElementById(listId).appendChild(infoItem);
                                }
                            }
                        }
                    })
                    .catch(error => console.error('Error al obtener info:', error));
            };
            
            

            fetchAndDisplayInfo(data.homeworld, 'homeworldInfo');
            data.films.forEach(film => fetchAndDisplayInfo(film, 'filmsList'));
            data.species.forEach(species => fetchAndDisplayInfo(species, 'speciesList'));
            data.vehicles.forEach(vehicles => fetchAndDisplayInfo(vehicles, 'vehicleslist'));
            data.starships.forEach(starships => fetchAndDisplayInfo(starships, 'starshipsList'));   
        })
        .catch(error => {
            console.error('Error al consultar el API:', error);
            document.getElementById('result').innerHTML = ' Error por favor elija un nuevo personaje';
        });

        
});
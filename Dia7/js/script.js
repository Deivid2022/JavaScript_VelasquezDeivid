function fetchSuperHeroes() {
    let xhr =  new XMLHttpRequest();
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url = `https://superheroapi.com/api.php/${apikey}/${heroID}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            displayHero(response);
            document.getElementById("getPowersButton").disabled = false;
            document.getElementById("getBiographyButton").disabled = false;
            document.getElementById("getApparenceButton").disabled = false;
            document.getElementById("getWorkButton").disabled = false;
            document.getElementById("getConnectionsButton").disabled = false;
            document.getElementById("getImageButton").disabled = false;
        } else if (this.readyState == 4) {
            console.log('Error', this.statusText);
        }
    };
    xhr.send();
}

function displayHero(data) {
    let heroInfo = document.getElementById('superHeroInfo')
    if (data.response === 'error') {
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        heroInfo.innerHTML = `<p>Nombre: ${data.name}</p>`;
    }
}

function powerHero() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url = `https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let powers = data.powerstats;
            let powersHTML = '<p>Poderes:</p><ul>';
            for (let power in powers) {
                powersHTML += `<li>${power}: ${powers[power]}</li>`;
            }
            document.getElementById('superHeroPower').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching powers:', error));
}

function heroBiography() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url = `https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let biographys = data.biography;
            let powersHTML = '<p>Biografía:</p><ul>';
            for (let biography in biographys) {
                powersHTML += `<li>${biography}: ${biographys[biography]}</li>`;
            }
            document.getElementById('superHeroBiography').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching powers:', error));
}

function heroAppearance() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url = `https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let appearances = data.appearance;
            let powersHTML = '<p>Apariencia:</p><ul>';
            for (let appearance in appearances) {
                powersHTML += `<li>${appearance}: ${appearances[appearance]}</li>`;
            }
            document.getElementById('superHeroApparence').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching powers:', error));
}

function heroWork() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url = `https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let work = data.work;
            let powersHTML = '<p>Trabajo:</p><ul>';
            for (let works in work) {
                powersHTML += `<li>${works}: ${work[works]}</li>`;
            }
            document.getElementById('superHeroWork').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching powers:', error));
}

function heroConnections() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url = `https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let Connections = data.connections;
            let powersHTML = '<p>Conexiones:</p><ul>';
            for (let works in Connections) {
                powersHTML += `<li>${works}: ${Connections[works]}</li>`;
            }
            document.getElementById('superHeroConnections').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching powers:', error));
}

function heroImage() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url = `https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let imageUrl = data.image.url;
            let imageHTML = `<img src="${imageUrl}" alt="Imagen del superhéroe" class="rounded mx-auto d-block">`;
            document.getElementById('superHeroImage').innerHTML = imageHTML;
        })
        .catch(error => console.error('Error fetching image:', error));
}








function fetchPeople() {
    let xhr =  new XMLHttpRequest();
    let url = `https://swapi.py4e.com/api/people/1`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            displaypeople(response);
            homeworld(response);
            films(response);
        } else if (this.readyState == 4) {
            console.log('Error', this.statusText);
        }
    };
    xhr.send();
}
fetchPeople();
function displaypeople(data) {
    let peopleInfo = document.getElementById('people')
    if (data.response === 'error') {
        peopleInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        
        peopleInfo.innerHTML = `<p>Name: ${data.name} <br>Height: ${data.height} <br> Mass: ${data.mass} <br> 
        Hair color: ${data.hair_color} <br> Skin color: ${data.skin_color} <br>Eyes color: ${data.eye_color} <br>
        Birth year: ${data.birth_year} <br> Gender: ${data.gender}</p>`
    }
        
}
function homeworld(data){
    let url = data.homeworld
    fetch(url)
    .then(response => response.json())  
    .then(data => {
        let homeworld = data;
        let HomeHTML = '<p>Homeworld:</p><ul>';
        for (let i in homeworld) {
            HomeHTML += `<li>${i}: ${homeworld[i]}</li>`;
        }
        document.getElementById('people1').innerHTML = HomeHTML;
    })
    .catch(error => console.error('Error fetching Homeworld:', error));
       

}
homeworld();

function films(data) {
    let filmsHTML = '<p>Films:</p><ul>';
    
}
films();




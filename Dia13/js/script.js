function AgregarHeroe(){
    var datos = {
        NombrePersonaje: document.getElementById('nombreP').value,
        NombreActor: document.getElementById('nombreA').value,
        EdadActor: parseInt(document.getElementById('edad').value),
        Ubicacion: document.getElementById('ubicacion').value,
        Poster: document.getElementById('poster').value,
        FechaNacimiento: document.getElementById('Fechanacimiento').value,
        Productora: document.getElementById('Productora').value
    };

    var datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];

    datosGuardados.push(datos);

    localStorage.setItem("datos", JSON.stringify(datosGuardados));

    console.log("Datos guardados:", datos);
    console.log("Todos los datos:", datosGuardados);
}

function MostrarHeroes(){
    var datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];
    var container = document.getElementById('heroesContainer');
    container.innerHTML = '';

    datosGuardados.forEach(function(heroe){
        var heroCard = document.createElement('div');
        heroCard.innerHTML = `
            <h2>${heroe.NombrePersonaje}</h2>
            <p><strong>Nombre del Actor:</strong> ${heroe.NombreActor}</p>
            <p><strong>Edad del Actor:</strong> ${heroe.EdadActor}</p>
            <p><strong>Ubicación:</strong> ${heroe.Ubicacion}</p>
            <p><strong>Poster:</strong> ${heroe.Poster}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${heroe.FechaNacimiento}</p>
            <p><strong>Productora:</strong> ${heroe.Productora}</p>
        `;
        container.appendChild(heroCard);
    });
}



































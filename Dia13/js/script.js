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



    var datosHeroe = JSON.stringify(datos);    

    var datosRecuperados = JSON.parse(datosHeroe);

    localStorage.setItem("datos", datosRecuperados);

    console.log("Datos guardados:", datosRecuperados);
}


function MostrarHeroes(){
    var personFromLS = localStorage.getItem("datos");

    for(personFromLS of heroe){
        console.log("Nombre Heroe" + personFromLS.heroe);
    }
    

    
}



































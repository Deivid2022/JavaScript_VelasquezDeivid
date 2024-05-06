var heroes = [];


function addHero() {
    var nombre = document.getElementById("nombreP").value.trim();
    var actor = document.getElementById("nombreA").value.trim();
    var edad = document.getElementById("age").value.trim();
    var ubicacion = document.getElementById("cityName").value.trim();
    var poster = document.getElementById("poster").value.trim();
    var fecha = document.getElementById("dateAppears").value.trim();
    var productora = document.getElementById("producer").value.trim();

    
    if (nombre === "" || actor === "" || edad === "" || ubicacion === "" || poster === "" || fecha === "" || productora === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

   
    var newHero = {
        nombre: nombre,
        actor: actor,
        edad: edad,
        ubicacion: ubicacion,
        poster: poster,
        fecha: fecha,
        productora: productora
    };

   
    heroes.push(newHero);

    
    clearForm();

   
    displayHeroes();
}


function displayHeroes() {
    var heroTable = document.getElementById("heroTable");
    
    // Limpiar la tabla antes de agregar los héroes nuevamente
    heroTable.innerHTML = "";

    // Crear encabezados de tabla
    var headerRow = document.createElement("tr");
    for (var prop in heroes[0]) {
        if (heroes[0].hasOwnProperty(prop) && typeof heroes[0][prop] !== "function") {
            var headerCell = document.createElement("th");
            headerCell.textContent = prop.charAt(0).toUpperCase() + prop.slice(1);
            headerRow.appendChild(headerCell);
        }
    }
    headerRow.appendChild(document.createElement("th")); // Celda vacía para los botones
    heroTable.appendChild(headerRow);

    // Recorrer todos los héroes y agregarlos como filas de la tabla
    heroes.forEach(function(hero, index) {
        var row = document.createElement("tr");
        for (var prop in hero) {
            if (hero.hasOwnProperty(prop) && typeof hero[prop] !== "function") {
                var cell = document.createElement("td");
                cell.textContent = hero[prop];
                row.appendChild(cell);
            }
        }

        // Agregar botones de actualizar y eliminar en una celda adicional
        var actionCell = document.createElement("td");
        var updateButton = document.createElement("button");
        updateButton.textContent = "Actualizar";
        updateButton.className = "btn btn-primary";
        updateButton.onclick = function() {
            updateHero(index);
        };
        actionCell.appendChild(updateButton);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.className = "btn btn-danger";
        deleteButton.style.marginLeft = "5px"
        deleteButton.onclick = function() {
            deleteHero(index);
        };
        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);

        heroTable.appendChild(row);
    });
}




function deleteHero(index) {
    
    heroes.splice(index, 1);

    
    displayHeroes();
}

function updateHero(index) {
    var updatedNombre = prompt("Ingrese el nuevo nombre del héroe:");
    var updatedActor = prompt("Ingrese el nuevo nombre del actor:");
    var updatedEdad;
    var updatedUbicacion = prompt("Ingrese la nueva ubicación:");
    var updatedPoster = prompt("Ingrese el nuevo póster:");
    var updatedFecha;
    var updatedProductora;

    do {
        updatedEdad = prompt("Ingrese la nueva edad del actor (solo números):");
        if (isNaN(updatedEdad)) {
            alert("Por favor, ingrese solo números para la edad.");
        }
    } while (isNaN(updatedEdad));

    do {
        updatedFecha = prompt("Ingrese la nueva fecha de aparición (Formato YYYY-MM-DD):");
        if (isNaN(Date.parse(updatedFecha))) {
            alert("Por favor, ingrese una fecha válida en el formato YYYY-MM-DD.");
        }
    } while (isNaN(Date.parse(updatedFecha)));

    do {
        updatedProductora = prompt("Ingrese la nueva productora (Marvel o DComics):");
        if (updatedProductora !== "Marvel" && updatedProductora !== "DComics") {
            alert("Por favor, ingrese 'Marvel' o 'DComics' como productora.");
        }
    } while (updatedProductora !== "Marvel" && updatedProductora !== "DComics");

    // Validación adicional para los otros campos
    if (updatedNombre !== null && updatedActor !== null && updatedUbicacion !== null && updatedPoster !== null && updatedFecha !== null && updatedProductora !== null) {
        // Actualizar el héroe en el arreglo
        heroes[index] = {
            nombre: updatedNombre.trim(),
            actor: updatedActor.trim(),
            edad: updatedEdad.trim(),
            ubicacion: updatedUbicacion.trim(),
            poster: updatedPoster.trim(),
            fecha: updatedFecha.trim(),
            productora: updatedProductora.trim()
        };

        // Actualizar la lista de héroes en la página
        displayHeroes();
    }
}





function clearForm() {
    document.getElementById("nombreP").value = "";
    document.getElementById("nombreA").value = "";
    document.getElementById("age").value = "";
    document.getElementById("cityName").value = "";
    document.getElementById("poster").value = "";
    document.getElementById("dateAppears").value = "";
    document.getElementById("producer").value = "Marvel"; 
}


displayHeroes();

var addingNewHero = false;

// Función para manejar el proceso de agregar un nuevo héroe
function addNewHero() {
    addingNewHero = true;
    // Ocultar la sección de traje del personaje
    document.getElementById("heroCostumeSection").style.display = "block";
    // Deshabilitar los campos de entrada
    enableInputs();
}

// Función para deshabilitar los campos de entrada
function disableInputs() {
    var inputs = document.querySelectorAll("#frmDataHero input, #frmDataHero select");
    inputs.forEach(function(input) {
        input.disabled = true;
    });
}

// Deshabilitar los campos de entrada al cargar la página
window.onload = function() {
    disableInputs();
};

// Función para habilitar los campos de entrada
function enableInputs() {
    var inputs = document.querySelectorAll("#frmDataHero input, #frmDataHero select");
    inputs.forEach(function(input) {
        input.disabled = false;
    });
}

document.getElementById("addSuite").addEventListener("click", function(event) {
    event.preventDefault();

    var label = document.createElement("label");
    label.textContent = "Nombre del traje";
    
    var input = document.createElement("input");
    input.type = "text";
    input.className = "form-control"; 

    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-danger";
    button.textContent = "-";

    var labelReference = label;

    button.addEventListener("click", function() {
        var inputGroup = button.parentElement;
    
        inputGroup.remove();
        labelReference.remove();
    });
    
    var inputGroup = document.createElement("div");
    inputGroup.className = "input-group mb-3";

    
    inputGroup.appendChild(input);
    inputGroup.appendChild(button);

    var container = document.querySelector("#suitesContainer .body-detail");
    container.appendChild(label);
    container.appendChild(inputGroup);
    
});



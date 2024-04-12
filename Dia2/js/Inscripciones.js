function inscripciones() {
    let estado = 'Inscrito';
    let nuevaInscripcion = {};
    let identidad;

    do {
        identidad = parseInt(prompt('Ingresa el número de identidad del camper:'));
        if (isNaN(identidad) || identidad <= 0) {
            console.log('El número de identidad debe ser un entero positivo.');
        }
    } while (isNaN(identidad) || identidad <= 0);

    console.log('El número de identidad ingresado es válido:', identidad);

    nuevaInscripcion['identidad'] = identidad;
    nuevaInscripcion['nombre'] = prompt('Ingresa el nombre del camper: ');
    nuevaInscripcion['apellido1'] = prompt('Ingrese el primer apellido del camper: ');
    nuevaInscripcion['apellido2'] = prompt('Ingrese el segundo apellido del camper: ');
    nuevaInscripcion['direccion'] = prompt('Ingrese la direccion del camper: ');
    let edad = prompt('Ingrese la edad del camper: ');
    nuevaInscripcion['edad'] = parseInt(edad);
    if (nuevaInscripcion['edad'] <= 17) {
        nuevaInscripcion['acudiente'] = prompt('Ingrese el nombre del acudiente del camper: ');
        let celularAcudiente = prompt('Ingrese el número de celular del acudiente: ');
        while (isNaN(celularAcudiente) || celularAcudiente <= 0) {
            console.log('El número de celular del acudiente debe ser un entero positivo.');
            celularAcudiente = prompt('Ingrese el número de celular del acudiente: ');
        }
        nuevaInscripcion['celular_acudiente'] = parseInt(celularAcudiente);
    } else {
        nuevaInscripcion['acudiente'] = null;
        nuevaInscripcion['celular_acudiente'] = null;
    }

    let celular = prompt('Ingresa el número de celular del camper: ');
    nuevaInscripcion['celular'] = parseInt(celular);
    let telefono = prompt('Ingrese el número fijo: ');
    nuevaInscripcion['telefono'] = parseInt(telefono);
    nuevaInscripcion['estado'] = estado;

    return nuevaInscripcion;
}

const fs = require('fs');

let nuevaInscripcion = inscripciones();

// Cargar el archivo JSON actual
fs.readFile('Inscritos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Hubo un error al leer el archivo:', err);
        return;
    }

    let inscritos = [];

    // Verificar si el archivo JSON tiene contenido
    if (data.trim() !== '') {
        inscritos = JSON.parse(data);
    }

    // Agregar la nueva inscripción al arreglo existente
    inscritos.push(nuevaInscripcion);

    // Convertir el arreglo actualizado a una cadena JSON
    let newDataJSON = JSON.stringify(inscritos, null, 2);

    // Escribir la cadena JSON actualizada en el archivo
    fs.writeFile('Inscritos.json', newDataJSON, 'utf8', (err) => {
        if (err) {
            console.error('Hubo un error al escribir en el archivo:', err);
            return;
        }
        console.log('La inscripción se agregó correctamente.');
    });
});






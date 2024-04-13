// Función para agregar un nuevo dato al array y guardarlo en localStorage
function agregarDato() {
    let id = prompt("Ingrese el número de identificación del camper:");
    let nombres = prompt("Ingrese los nombres del camper:");
    let apellidos = prompt("Ingrese los apellidos del camper:");
    let direccion = prompt("Ingrese la dirección del camper:");
    let celular = prompt("Ingrese el número de celular del camper:");
    let fijo = prompt("Ingrese el número fijo del camper:");
    let estado = "Inscrito"
    let modulo = null

    let nuevoDato = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        direccion: direccion,
        telefonos: {
            celular: celular,
            fijo: fijo
        },
        estado: estado,
        modulo: modulo
    };

    datos.push(nuevoDato);
    localStorage.setItem('datos', JSON.stringify(datos)); // Guardar en localStorage
    console.log("Datos agregados correctamente.");
}

// Función para cargar los datos desde localStorage al iniciar la aplicación
function cargarDatos() {
    // Obtener los datos guardados en localStorage bajo la clave 'datos'
    let datosGuardados = localStorage.getItem('datos');
    
    // Verificar si se encontraron datos guardados en localStorage
    if (datosGuardados) {
        // Si se encontraron datos, convertir la cadena JSON de datos a un objeto JavaScript y asignarlos a la variable datos
        datos = JSON.parse(datosGuardados);
    }
}


// Función para mostrar todos los datos en el array
function mostrarDatos() {
    console.log("Datos actuales:");
    datos.forEach((dato, index) => {
        console.log(`${index + 1}.`);
        console.log(`   ID: ${dato.id}`);
        console.log(`   Nombres: ${dato.nombres}`);
        console.log(`   Apellidos: ${dato.apellidos}`);
        console.log(`   Dirección: ${dato.direccion}`);
        console.log(`   Teléfono Celular: ${dato.telefonos.celular}`);
        console.log(`   Teléfono Fijo: ${dato.telefonos.fijo}`);
        console.log(`   Estado: ${dato.estado}`)
        console.log(`   Modulo: ${dato.modulo}`)
    });
}

// Función para actualizar un dato en el array y en localStorage
function actualizarDato(index) {
    if (index >= 0 && index < datos.length) {
        let dato = datos[index];
        console.log("Datos actuales antes de la actualización:");
        console.log(datos); // Mostrar los datos actuales antes de la actualización

        // Solicitar al usuario qué dato desea actualizar y el nuevo valor
        let opcion = prompt("¿Qué dato desea actualizar? (ID, Nombres, Apellidos, Dirección, Acudiente, Celular, Fijo)");
        let nuevoValor = prompt(`Ingrese el nuevo valor para ${opcion}:`);

        // Verificar si la opción ingresada es válida y actualizar el dato correspondiente
        if (opcion === "ID" || opcion === "Nombres" || opcion === "Apellidos" || opcion === "Dirección" || opcion === "Acudiente" || opcion === "Celular" || opcion === "Fijo") {
            // Convertir la opción a minúsculas para acceder a la propiedad correspondiente del objeto
            dato[opcion.toLowerCase()] = nuevoValor;

            // Guardar los datos actualizados en localStorage
            localStorage.setItem('datos', JSON.stringify(datos));
            console.log("Datos actualizados después de la actualización:");
            console.log(datos); // Mostrar los datos actualizados después de la actualización

            // Informar al usuario que el dato ha sido actualizado correctamente
            console.log("Dato actualizado correctamente.");
        } else {
            // Informar al usuario si la opción ingresada no es válida
            console.log("Opción inválida.");
        }
    } else {
        console.log("Índice fuera de rango o datos no encontrados.");
    }
}


// Función para eliminar un dato del array y actualizar en localStorage
function eliminarDato(index) {
    // Verificar si el índice proporcionado está dentro del rango válido
    if (index >= 0 && index < datos.length) {
        // Eliminar el dato en la posición especificada por el índice
        datos.splice(index, 1);
        
        // Actualizar los datos en localStorage
        localStorage.setItem('datos', JSON.stringify(datos));
        
        // Informar al usuario que el dato ha sido eliminado correctamente
        console.log("Dato eliminado correctamente.");
    } else {
        // Informar al usuario si el índice está fuera de rango
        console.log("Índice fuera de rango.");
    }
}


// Función para mostrar el menú y realizar las acciones según la selección del usuario
function mostrarMenu() {
    let opcion;
    while (opcion !== "6") {
        console.log("=== MENÚ Coordinador ===");
        console.log("1. Agregar dato");
        console.log("2. Mostrar datos");
        console.log("3. Actualizar dato");
        console.log("4. Eliminar dato");
        console.log("5. Prueba Inicial");
        console.log("6. Salir");
        console.log("7. Notas de modulo 1")
        console.log("8. Notas de modulo 2")
        console.log("9. Notas de modulo 3")
        console.log("10. Notas de modulo 4")
    }

        opcion = prompt("Seleccione una opción del menú:");

        switch (opcion) {
            case "1":
                agregarDato();
                break;
            case "2":
                mostrarDatos();
                break;
            case "3":
                mostrarDatos();
                let indiceActualizar = parseInt(prompt("Ingrese el índice del dato que desea actualizar:")) - 1;
                actualizarDato(indiceActualizar);
                break;
            case "4":
                mostrarDatos();
                let indiceEliminar = parseInt(prompt("Ingrese el índice del dato que desea eliminar:")) - 1;
                eliminarDato(indiceEliminar);
                break;
            case "5":
                mostrarDatos();
                let indicePrueba = parseInt(prompt("Ingrese el índice del camper que desee colocar las notas:")) - 1;
                PruebaInicial(indicePrueba);
                break;
            case "6":
                console.log("Saliendo del programa...");
                break;
            case "7":
                mostrarDatos();
                let indiceModulo = parseInt(prompt("Ingrese el índice del camper que desee colocar las notas del modulo 1:")) - 1;
                Modulos(indiceModulo);
                break;
            case "8":
                mostrarDatos();
                let indiceModulo1 = parseInt(prompt("Ingrese el índice del camper que desee colocar las notas del modulo 2:")) - 1;
                Modulos1(indiceModulo1);
                break;
            case "9":
                mostrarDatos();
                let indiceModulo2 = parseInt(prompt("Ingrese el índice del camper que desee colocar las notas del modulo 3:")) - 1;
                Modulos2(indiceModulo2);
                break;
            case "10":
                mostrarDatos();
                let indiceModulo3 = parseInt(prompt("Ingrese el índice del camper que desee colocar las notas del modulo 4:")) - 1;
                Modulos3(indiceModulo3);
                break;
            default:
                console.log("Opción inválida.");
        }
    }



function limpiarDatos() {
    datos = [];
    localStorage.removeItem('datos');
    console.log("Todos los datos han sido eliminados.");
}

function PruebaInicial(index) {
    if (index >= 0 && index < datos.length) {
        let dato = datos[index];
        console.log("Datos antes de la actualización:");
        console.log(datos);

        let opcion1 = prompt("Ingrese el valor de la nota Practica");
        let opcion2 = prompt("Ingrese el valor de la nota Teorica");

        let notaFinal = (parseFloat(opcion1) + parseFloat(opcion2)) / 2;

        if (!isNaN(notaFinal)) {
            if (notaFinal >= 60) {
                dato.estado = "Aprobado";
                dato.modulo = "Fundamentos de programación"
            } else {
                dato.estado = "Reprobado"; 
            }

            // Guardar los datos actualizados en localStorage
            localStorage.setItem('datos', JSON.stringify(datos));

            console.log("Datos después de la actualización:");
            console.log(datos);

            console.log("Dato actualizado correctamente.");
        } else {
            console.log("Las opciones ingresadas no son válidas.");
        }
    } else {
        console.log("Índice fuera de rango o datos no encontrados.");
    }
}

function Modulos(index){
    if (index >= 0 && index < datos.length){
        let dato = datos[index];
        console.log("Datos antes de la actualización:");
        console.log(datos);

        let opcion1 = prompt("Ingrese el valor de la nota Practica");
        let nota1 = opcion1 * 0.6
        let opcion2 = prompt("Ingrese el valor de la nota Teorica");
        let nota2 = opcion2 * 0.3
        let opcion3 = prompt("Ingresa cuantas notas de quizes y trabajos tiene el camper");
        let totalNotas = 0;
        // Comprobar si la entrada es un número válido
        if (!isNaN(opcion3) && opcion3 > 0) {
            // Iterar sobre el número de notas ingresadas
            for (let i = 1; i <= opcion3; i++) {
                // Solicitar al usuario que ingrese la nota
                let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
                
                // Comprobar si la entrada es un número válido
                if (!isNaN(nota)) {
                    // Sumar la nota al total acumulado
                    totalNotas += nota;
                } else {
                    console.log(`La nota ${i} no es un número válido. Se ignorará.`);
                }
            }

        } else {
            console.log("La cantidad de notas ingresada no es válida.");
        }
        let nota3 = totalNotas * 0.1

        let notaFinal = nota1 + nota2 + nota3

        if (!isNaN(notaFinal)) {
            if (notaFinal >= 60) {
                dato.estado = "Cursando";
                dato.modulo = "Programación Web"
            } else { 
                dato.estado = "Reprobado";
                dato.modulo = "Expulsado"
            }

            // Guardar los datos actualizados en localStorage
            localStorage.setItem('datos', JSON.stringify(datos));

            console.log("Datos después de la actualización:");
            console.log(datos);

            console.log("Dato actualizado correctamente.");
        } else {
            console.log("Las opciones ingresadas no son válidas.");
        }
    } else {
        console.log("Índice fuera de rango o datos no encontrados.");
    }
}
function Modulos1(index){
    if (index >= 0 && index < datos.length){
        let dato = datos[index];
        console.log("Datos antes de la actualización:");
        console.log(datos);

        let opcion1 = prompt("Ingrese el valor de la nota Practica");
        let nota1 = opcion1 * 0.6
        let opcion2 = prompt("Ingrese el valor de la nota Teorica");
        let nota2 = opcion2 * 0.3
        let opcion3 = prompt("Ingresa cuantas notas de quizes y trabajos tiene el camper");
        let totalNotas = 0;
        // Comprobar si la entrada es un número válido
        if (!isNaN(opcion3) && opcion3 > 0) {
            // Iterar sobre el número de notas ingresadas
            for (let i = 1; i <= opcion3; i++) {
                // Solicitar al usuario que ingrese la nota
                let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
                
                // Comprobar si la entrada es un número válido
                if (!isNaN(nota)) {
                    // Sumar la nota al total acumulado
                    totalNotas += nota;
                } else {
                    console.log(`La nota ${i} no es un número válido. Se ignorará.`);
                }
            }

        } else {
            console.log("La cantidad de notas ingresada no es válida.");
        }
        let nota3 = totalNotas * 0.1

        let notaFinal = nota1 + nota2 + nota3

        if (!isNaN(notaFinal)) {
            if (notaFinal >= 60) {
                dato.estado = "Cursando";
                dato.modulo = "Programación formal"
            } else { 
                dato.estado = "Reprobado";
                dato.modulo = "Expulsado"
            }

            // Guardar los datos actualizados en localStorage
            localStorage.setItem('datos', JSON.stringify(datos));

            console.log("Datos después de la actualización:");
            console.log(datos);

            console.log("Dato actualizado correctamente.");
        } else {
            console.log("Las opciones ingresadas no son válidas.");
        }
    } else {
        console.log("Índice fuera de rango o datos no encontrados.");
    }
}
function Modulos2(index){
    if (index >= 0 && index < datos.length){
        let dato = datos[index];
        console.log("Datos antes de la actualización:");
        console.log(datos);

        let opcion1 = prompt("Ingrese el valor de la nota Practica");
        let nota1 = opcion1 * 0.6
        let opcion2 = prompt("Ingrese el valor de la nota Teorica");
        let nota2 = opcion2 * 0.3
        let opcion3 = prompt("Ingresa cuantas notas de quizes y trabajos tiene el camper");
        let totalNotas = 0;
        // Comprobar si la entrada es un número válido
        if (!isNaN(opcion3) && opcion3 > 0) {
            // Iterar sobre el número de notas ingresadas
            for (let i = 1; i <= opcion3; i++) {
                // Solicitar al usuario que ingrese la nota
                let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
                
                // Comprobar si la entrada es un número válido
                if (!isNaN(nota)) {
                    // Sumar la nota al total acumulado
                    totalNotas += nota;
                } else {
                    console.log(`La nota ${i} no es un número válido. Se ignorará.`);
                }
            }

        } else {
            console.log("La cantidad de notas ingresada no es válida.");
        }
        let nota3 = totalNotas * 0.1

        let notaFinal = nota1 + nota2 + nota3

        if (!isNaN(notaFinal)) {
            if (notaFinal >= 60) {
                dato.estado = "Cursando";
                dato.modulo = "Bases de datos"
            } else { 
                dato.estado = "Reprobado";
                dato.modulo = "Expulsado"
            }

            // Guardar los datos actualizados en localStorage
            localStorage.setItem('datos', JSON.stringify(datos));

            console.log("Datos después de la actualización:");
            console.log(datos);

            console.log("Dato actualizado correctamente.");
        } else {
            console.log("Las opciones ingresadas no son válidas.");
        }
    } else {
        console.log("Índice fuera de rango o datos no encontrados.");
    }
}
function Modulos3(index){
    if (index >= 0 && index < datos.length){
        let dato = datos[index];
        console.log("Datos antes de la actualización:");
        console.log(datos);

        let opcion1 = prompt("Ingrese el valor de la nota Practica");
        let nota1 = opcion1 * 0.6
        let opcion2 = prompt("Ingrese el valor de la nota Teorica");
        let nota2 = opcion2 * 0.3
        let opcion3 = prompt("Ingresa cuantas notas de quizes y trabajos tiene el camper");
        let totalNotas = 0;
        // Comprobar si la entrada es un número válido
        if (!isNaN(opcion3) && opcion3 > 0) {
            // Iterar sobre el número de notas ingresadas
            for (let i = 1; i <= opcion3; i++) {
                // Solicitar al usuario que ingrese la nota
                let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
                
                // Comprobar si la entrada es un número válido
                if (!isNaN(nota)) {
                    // Sumar la nota al total acumulado
                    totalNotas += nota;
                } else {
                    console.log(`La nota ${i} no es un número válido. Se ignorará.`);
                }
            }

        } else {
            console.log("La cantidad de notas ingresada no es válida.");
        }
        let nota3 = totalNotas * 0.1

        let notaFinal = nota1 + nota2 + nota3

        if (!isNaN(notaFinal)) {
            if (notaFinal >= 60) {
                dato.estado = "Cursando";
                dato.modulo = "Backend"
            } else { 
                dato.estado = "Reprobado";
                dato.modulo = "Expulsado"
            }

            // Guardar los datos actualizados en localStorage
            localStorage.setItem('datos', JSON.stringify(datos));

            console.log("Datos después de la actualización:");
            console.log(datos);

            console.log("Dato actualizado correctamente.");
        } else {
            console.log("Las opciones ingresadas no son válidas.");
        }
    } else {
        console.log("Índice fuera de rango o datos no encontrados.");
    }
}


// Ejemplo de uso
let datos = []; // Array para almacenar los datos
cargarDatos(); // Cargar datos existentes al iniciar la aplicación
mostrarMenu(); // Mostrar menú y realizar acciones según la selección del usuario


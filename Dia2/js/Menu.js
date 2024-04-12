

function Menucamper(){
    
}

function MenuTrainer(){
    while (true){
        console.log ("1. Leer Trainers")
        console.log ("2. Añadir Trainers")
        console.log ("3. Actualizar Trainers")
        console.log ("4. Eliminar Trainers")
        console.log ("5. Volver al menú principal")
    }
}
function Menucoordinador(){
    clear_console()
    while (true){
        console.log ("Rol de Coordinador:")
        console.log ("1. Agregar Coordinadores")
        console.log ("2. Agregar Trainers")
        console.log ('3. Incripciones')
        console.log ("4. Prueba Inicial")
        console.log ("5. Distribución de Aulas")
        console.log ("6. Módulo de Reportes")
        console.log ("7. Notas")
        console.log ("8. Rutas")
        console.log ("9. Volver al menú principal")
        let rtaC = prompt("Elige lo que deseas hacer")

        if (rtaC == 1){
            null
        }else if (rtaC == 2){
            null
        }else if (rtaC == 3){
            inscripciones()
        }
    }
}



function MenuPrincipal(){
    while (true) {
        console.log ('----------------------------------------')
        console.log ("--  Bienvenido al sistema de gestión  --")
        console.log ('----------------------------------------')
        console.log (null)
        console.log ("1. Rol Camper")
        console.log ("2. Menú Trainer")
        console.log ("3. Rol Coordinador")
        console.log ("4. Salir")
        let rta = prompt("Elige el rol deseado")
        
        if (rta == 1){
            Menucamper();
        }else if (rta == 2){
            MenuTrainer();
        }else if (rta == 3){
            Menucoordinador();
        }else if (rta == 4){
            console.log("Hasta luego!!")
            break;
        }

    }
}
MenuPrincipal()
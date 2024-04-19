/*********************************************** */
/****************** Ejercicio7 ***************** */
/*********************************************** */

class Estudiante {
    constructor(nombre, ticsNecesarios) {
        this.nombre = nombre;
        this.ticsNecesarios = ticsNecesarios;
    }

    pass() {
        return this.ticsNecesarios >= 6;
    }
}

class EstudianteNS extends Estudiante {
    constructor(nombre, ticsNecesariosNs) {
        super(nombre);
        this.ticsNecesariosNs = ticsNecesariosNs
    }
    pass(){
        return this.ticsNecesariosNs >= 4;
    }

}


const estudiantes = [
    new Estudiante("Juan", 6),
    new Estudiante("María", 6),
    new EstudianteNS("Pedrito", 4),
    new Estudiante("Luisa", 6)
];


estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre} pasó el año: ${estudiante.pass()}`);
});
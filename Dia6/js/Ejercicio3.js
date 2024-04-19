/*********************************************** */
/****************** Ejercicio3 ***************** */
/*********************************************** */

class vehiculo {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
}

let carro1 = new vehiculo ("BMW", "M Sport", 2024)
console.log(carro1)

class auto extends vehiculo{
    constructor (marca, modelo, año, Npuertas){
        super(marca, modelo, año)
        this.Npuertas = Npuertas
    }
}

let carro = new auto ("Audi", "Sport", 2023, 2)
console.log(carro)
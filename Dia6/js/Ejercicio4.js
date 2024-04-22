/*********************************************** */
/****************** Ejercicio4 ***************** */
/*********************************************** */

class CuentaBancaria {
    constructor(Ncuenta, saldo) {
        this.Ncuenta = Ncuenta;
        this.saldo = saldo;
    }

    Ingreso(ingreso) {
        if (ingreso > 0) {
            this.saldo += ingreso; // Actualizar el saldo
            console.log("Ingreso exitoso. Nuevo saldo:", this.saldo);
        } else {
            console.log("El monto ingresado no es válido.");
        }
    }

    Retiro(retiro) {
        if (retiro > 0 && retiro <= this.saldo) {
            this.saldo -= retiro; // Actualizar el saldo
            console.log("Retiro exitoso. Nuevo saldo:", this.saldo);
        } else {
            console.log("No tienes suficientes fondos para realizar este retiro.");
        }
    }
}

let Numero = parseInt(prompt("Ingresa el numero de cuenta:"));
let SaldoInicial = parseInt(prompt("Ingrese el saldo Inicial de su cuenta:"));
let cuenta = new CuentaBancaria(Numero, SaldoInicial);

if (Numero > 0) {
    while (true) {
        console.log("1. Depositar dinero");
        console.log("2. Retirar dinero");
        console.log("3. Observar tu Numero de cuenta");
        console.log("4. Observar tu sueldo");
        console.log("5. Salir");

        let opcion = parseInt(prompt("Elige qué deseas hacer:"));

        if (opcion == 1) {
            let ingreso = parseInt(prompt("Ingresa la cantidad que deseas depositar:"));
            cuenta.Ingreso(ingreso);
        } else if (opcion == 2) {
            let retiro = parseInt(prompt("Ingresa la cantidad que deseas retirar:"));
            cuenta.Retiro(retiro);
        } else if (opcion == 3) {
            console.log("Número de cuenta:", cuenta.Ncuenta);
        } else if (opcion == 4) {
            console.log("Saldo actual:", cuenta.saldo);
        } else if (opcion == 5) {
            break;
        } else {
            console.log("Opción inválida.");
        }
    }
} else {
    console.log("El número no es un número positivo.");
}


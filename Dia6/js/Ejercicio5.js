/*********************************************** */
/****************** Ejercicio5 ***************** */
/*********************************************** */

class Forma {
    calcularArea() {
        console.log("");
    }
}

class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}

class Triangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura / 2;
    }
}

const circulo = new Circulo(5);
console.log("Área del círculo:", circulo.calcularArea());

const triangulo = new Triangulo(4, 3);
console.log("Área del triángulo:", triangulo.calcularArea());
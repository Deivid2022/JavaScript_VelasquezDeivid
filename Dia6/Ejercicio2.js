/*********************************************** */
/****************** Ejercicio2 ***************** */
/*********************************************** */

class rectangulo {
    constructor (alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    area() {
        console.log (this.alto * this. ancho);
    }
    perimetro(){
        console.log ((this.alto*2) + (this.ancho*2));
    }
}

const rectangulo1 = new rectangulo(5, 5);

rectangulo1.area();
rectangulo1.perimetro();
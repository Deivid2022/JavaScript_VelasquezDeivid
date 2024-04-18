class Usuario{
    constructor(Nombre, Juego){
        this.Nombre = Nombre;
        this.Juego = Juego;
    }

    saludar(){
        console.log(`¡Hola! Mi nombre es ${this.Nombre} y me gusta jugar ${this.Juego} los fines de semana.`);
    }
}

const Usuario1 = new Usuario('Deivid', 'Futbol');
const Usuario2 = new Usuario('Brayan', 'Tennis');

Usuario1.saludar();
Usuario2.saludar();



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

Usuario1.saludar();

class Coche {
    constructor(marca, modelo, año, color) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.color = color;
    }
  }
  
const coche = new Coche("Toyota", "Corolla", 2022, "rojo");
console.log(coche)

class Libro {
constructor(titulo, autor, genero, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.paginas = paginas;
}

    leer() {
        console.log(`Estoy leyendo el libro ${this.titulo}, del autor ${this.autor}, del genero ${this.genero} y contiene ${this.paginas} paginas.`);
    }
}

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "realismo mágico", 432);
libro.leer()

const numero = 42;

function suma(a, b) {
    return a + b;
  }
  
  


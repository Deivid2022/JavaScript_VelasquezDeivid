console.log("Hola mundo");

//**************** FUNCION SIN RETORNO Y SIN PARAMETROS ********************
function funcionNormal(){
    console.log("Mi funciòn");
}

funcionNormal()

//**************** FUNCION SIN RETORNO Y CON PARAMETROS ********************

function suma(a,b){
    console.log(a+b);
}

suma(5,5)

//**************** FUNCION CON RETORNO Y CON PARAMETROS ********************

function sumaR(a,b){
    return a+b;
}

console.log(sumaR(5,4));

//**************** FUNCION CON RETORNO Y SIN PARAMETROS *******************
function salonFavorito(){
    return "P1";
}

console.log(salonFavorito());

//**************** BUCLE FOR *******************

for (let i=0;i<10;i=i+2){
    console.log(i);
}

arreglo = [123,"Pedro",true]
tamano = arreglo.length;

for (let i=0;i<tamano;i++){
    console.log(arreglo[i]);
}

//**************** EJERCICIO 1 ****************
function Grados(c){
    F = 32 + (9*c/5); 
    console.log(F)
};
 
c = prompt("Digite el nùmero de Grados celcius: ") 

Grados(c)

function replaceSuccessors(dictionary, sentence) {
    // Crear un conjunto de palabras raíz del diccionario para una búsqueda eficiente
    let rootsSet = new Set(dictionary);
    // Dividir la oración en palabras individuales
    let words = sentence.split(" ");
    // Inicializar un array para almacenar la oración reemplazada
    let replacedSentence = [];
    
    // Iterar sobre cada palabra en la oración
    for (let word of words) {
        let found = false; // Bandera para indicar si se encontró una palabra raíz
        
        // Iterar sobre los posibles prefijos de la palabra actual
        for (let i = 1; i <= word.length; i++) {
            let prefix = word.slice(0, i); // Obtener el prefijo de la palabra
            
            // Si el prefijo está en el conjunto de palabras raíz, reemplazar la palabra actual
            if (rootsSet.has(prefix)) {
                replacedSentence.push(prefix); // Agregar el prefijo reemplazado al array de la oración
                found = true; // Marcar como encontrada la palabra raíz
                break; // Salir del bucle ya que se encontró una coincidencia
            }
        }
        
        // Si no se encontró una palabra raíz para la palabra actual, agregar la palabra original
        if (!found) {
            replacedSentence.push(word); 
        }
    }
    
    // Unir las palabras del array de la oración reemplazada en una sola cadena
    return replacedSentence.join(" ");
}

// Ejemplo de uso
let dictionary1 = ["cat","bat","rat"];
let sentence1 = "the cattle was rattled by the battery";
let output1 = replaceSuccessors(dictionary1, sentence1);
console.log(output1);



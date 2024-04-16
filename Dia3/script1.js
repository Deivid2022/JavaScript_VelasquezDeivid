function longestCommonPrefix(strs) {
    // Si el array de strings está vacío, no hay ningún prefijo común, así que retornamos una cadena vacía
    if (strs.length === 0) return "";

    // Inicializamos el prefijo común con el primer string del array
    let prefix = strs[0];

    // Iteramos sobre los strings restantes en el array
    for (let i = 1; i < strs.length; i++) {
        // Mientras el prefijo no sea un prefijo válido del string actual, lo acortamos
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1); // Acortamos el prefijo eliminando el último carácter
            // Si el prefijo se vuelve una cadena vacía, no hay ningún prefijo común, así que retornamos una cadena vacía
            if (prefix === "") return "";
        }
    }

    // Si hemos recorrido todos los strings y el prefijo sigue siendo válido para todos ellos, es el prefijo común más largo
    return prefix;
}

// Ejemplo de uso
let palabras = ["dog","racecar","car"]
let resultado = longestCommonPrefix(palabras);
console.log("El prefijo común más largo es:", resultado);


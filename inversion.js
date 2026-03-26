function invertirCadena(texto) {
    let cadenaInvertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        cadenaInvertida += texto[i];
    }
    
    return cadenaInvertida;
}


console.log(invertirCadena("Mi nombre es Priscila")); // "odnum alo
// fibonacci

let a = 0;
let b = 1;

for (let i = 0; i < 50; i++) {
    console.log(a);
    
    // Guardamos la suma en una variable temporal
    let siguiente = a + b;
    
    // Desplazamos los valores
    a = b;
    b = siguiente;
}
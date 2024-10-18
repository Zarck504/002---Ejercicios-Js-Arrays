function sumarElementos(arreglo) {
    let suma = 0;
    arreglo.forEach(function(elemento) {
        suma += elemento;
    });
    return suma;
}

console.log(sumarElementos([1, 2, 3, 4]));

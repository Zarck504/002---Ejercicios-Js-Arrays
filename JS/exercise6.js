function concatenarArreglos(arreglo1, arreglo2) {
    let resultado = [];
    arreglo1.forEach(function(elemento) {
        resultado.push(elemento);
    });
    arreglo2.forEach(function(elemento) {
        resultado.push(elemento);
    });
    return resultado;
}

console.log(concatenarArreglos([1, 2], [3, 4])); // Resultado: [1, 2, 3, 4]

function buscarElemento(arreglo, valor) {
    let encontrado = false;
    arreglo.forEach(function(elemento) {
        if (elemento === valor) {
            encontrado = true;
        }
    });
    return encontrado;
}

console.log(buscarElemento([1, 2, 3, 4], 3)); 
console.log(buscarElemento([1, 2, 3, 4], 5)); 
function eliminarDuplicados(arreglo) {
    let unicos = [];
    arreglo.forEach(function(elemento) {
        if (!unicos.includes(elemento)) {
            unicos.push(elemento);
        }
    });
    return unicos;
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4])); 
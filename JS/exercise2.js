function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    arreglo.forEach(function(elemento) {
        if (elemento > mayor) {
            mayor = elemento;
        }
    });
    return mayor;
}

console.log(encontrarMayor([1, 8, 3, 4])); 
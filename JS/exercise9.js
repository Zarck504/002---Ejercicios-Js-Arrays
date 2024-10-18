function filtrarPares(arreglo) {
    return arreglo.filter(function(elemento) {
        return elemento % 2 === 0;
    });
}

console.log(filtrarPares([1, 2, 3, 4]));
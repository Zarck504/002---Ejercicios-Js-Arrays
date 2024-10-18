function calcularPromedio(arreglo) {
    let suma = 0;
    arreglo.forEach(function(elemento) {
        suma += elemento;
    });
    return suma / arreglo.length;
}

console.log(calcularPromedio([10, 20, 30, 40]));
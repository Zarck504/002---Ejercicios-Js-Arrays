function obtenerNombres(arr) {
    return arr.map(function(objeto) {
        return objeto.nombre;
    });
}

const personas = [{ nombre: "Juan", edad: 30 }, { nombre: "Ana", edad: 25 }];
console.log(obtenerNombres(personas));
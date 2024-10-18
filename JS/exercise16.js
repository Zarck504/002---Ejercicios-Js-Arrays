function encontrarElemento(arr, propiedad, valor) {
    return arr.find(function(elemento) {
        return elemento[propiedad] === valor;
    });
}

const objetos = [
    { nombre: "manzana", color: "rojo" },
    { nombre: "plátano", color: "amarillo" },
    { nombre: "pera", color: "verde" }
];
console.log(encontrarElemento(objetos, "color", "verde")); 
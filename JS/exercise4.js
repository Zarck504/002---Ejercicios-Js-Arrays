function invertirArreglo(arreglo) {
    let invertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        invertido.push(arreglo[i]);
    }
    return invertido;
}

console.log(invertirArreglo([1, 2, 3, 4]));
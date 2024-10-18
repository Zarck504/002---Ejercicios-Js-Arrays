function estaVacio(arr) {
    let vacio = true;
    arr.forEach(function() {
        vacio = false;
    });
    return vacio;
}

console.log(estaVacio([])); 
console.log(estaVacio([1, 2, 3])); 
function ordenarNumeros(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}


const numeros = [4, 2, 5, 1, 3];
console.log(ordenarNumeros(numeros)); 

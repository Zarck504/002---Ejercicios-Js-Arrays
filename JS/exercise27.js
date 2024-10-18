function contarOcurrencias(arr, valor) {
    return arr.reduce(function(contador, elemento) {
        return elemento === valor ? contador + 1 : contador;
    }, 0);
}

const valores2 = [1, 2, 3, 1, 1, 4];
console.log(contarOcurrencias(valores2, 1)); 
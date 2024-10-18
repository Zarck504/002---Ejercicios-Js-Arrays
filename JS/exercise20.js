function productoDeTodos(arr) {
    return arr.reduce(function(acumulador, valorActual) {
        return acumulador * valorActual;
    }, 1);
}


const numeros5 = [1, 2, 3, 4];
console.log(productoDeTodos(numeros5));

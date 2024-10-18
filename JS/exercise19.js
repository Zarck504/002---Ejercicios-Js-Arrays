function sumaAcumulada(arr) {
    return arr.reduce(function(acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);
}


const numeros4 = [1, 2, 3, 4];
console.log(sumaAcumulada(numeros4)); 

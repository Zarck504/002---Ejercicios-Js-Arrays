function reemplazarNegativos(arr) {
    return arr.map(function(valor) {
        return valor < 0 ? Math.abs(valor) : valor;
    });
}

const numeros = [-1, 2, -3, 4];
console.log(reemplazarNegativos(numeros)); 
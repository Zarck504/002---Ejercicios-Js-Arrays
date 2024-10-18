function algunosPares(arr) {
    return arr.some(function(numero) {
        return numero % 2 === 0;
    });
}


const numeros3 = [1, 3, 5, 7, 10];
console.log(algunosPares(numeros3)); 

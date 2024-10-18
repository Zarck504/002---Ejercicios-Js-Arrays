function todosMayoresQue(arr, n) {
    return arr.every(function(numero) {
        return numero > n;
    });
}


const numeros2 = [10, 20, 30, 40];
console.log(todosMayoresQue(numeros2, 15)); 
console.log(todosMayoresQue(numeros2, 5));
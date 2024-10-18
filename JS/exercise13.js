function palabrasMasLargasQue(arr, n) {
    return arr.filter(function(palabra) {
        return palabra.length > n;
    });
}


const palabras2 = ["sol", "estrella", "luna", "planeta"];
console.log(palabrasMasLargasQue(palabras2, 4)); 

function combinarYOrdenar(...arrays) {
    let combinado = [];
    arrays.forEach(function(arr) {
        combinado = combinado.concat(arr);
    });
    return combinado.sort(function(a, b) {
        return a - b;
    });
}

const arr1 = [3, 1, 4];
const arr2 = [6, 5, 2];
console.log(combinarYOrdenar(arr1, arr2)); 
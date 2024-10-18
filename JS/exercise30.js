function combinarObjetos(arr1, arr2) {
    return arr1.map(function(objeto, index) {
        return { ...objeto, ...arr2[index] };
    });
}


const arrObj1 = [{ nombre: "Juan" }, { nombre: "Ana" }];
const arrObj2 = [{ edad: 30 }, { edad: 25 }];
console.log(combinarObjetos(arrObj1, arrObj2)); 
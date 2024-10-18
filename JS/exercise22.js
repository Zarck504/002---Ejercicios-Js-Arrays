function eliminarFalsy(arr) {
    return arr.filter(function(valor) {
        return valor;
    });
}

const valores = [0, "Hola", false, 42, "", null, "JavaScript"];
console.log(eliminarFalsy(valores)); 
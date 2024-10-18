function agruparPorDecada(arr) {
    return arr.reduce(function(grupos, persona) {
        const decada = Math.floor(persona.edad / 10) * 10;
        if (!grupos[decada]) {
            grupos[decada] = [];
        }
        grupos[decada].push(persona);
        return grupos;
    }, {});
}

const personas2 = [
    { nombre: "Juan", edad: 22 },
    { nombre: "Ana", edad: 35 },
    { nombre: "Pedro", edad: 42 },
    { nombre: "Luis", edad: 27 }
];
console.log(agruparPorDecada(personas2)); 
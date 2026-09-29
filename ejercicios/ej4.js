const armas = ["Espada de Hierro", "Hacha de Madera", "Daga de Cobre"];
const armasEncantadas = armas.map((arma) => `Mística: ${arma} +1`);

console.log("Array original:", armas);
console.log("Array encantado:", armasEncantadas);
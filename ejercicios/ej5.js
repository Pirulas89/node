const pokemonBase = { nombre: 'Pikachu', tipo: 'Eléctrico', nivel: 25 };
const ataques = ['Impactrueno', 'Ataque Rápido'];

const pokemonMejorado = {
  ...pokemonBase,
  variante: 'Shiny',
  nivel: 50
};

const listaAtaques = [...ataques, 'Rayo'];

console.log(pokemonMejorado);
console.log(listaAtaques);
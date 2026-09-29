const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// hobbies.map(); transforma el array

console.log(hobbies.map(hobby => {
  return 'Hobby: ' + hobby;
}));

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

// Permite recibir N argumentos de forma flexible
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4)); // Retorna: [1, 2, 3, 4]

// Copia de Array
const hobbiesCopia = [...hobbies, 'Programming'];
console.log(hobbiesCopia);

// Copia de Objeto
const persona = { nombre: 'Max', edad: 29 };
const personaCopiada = { ...persona };
console.log(personaCopiada);

// Modificación de un array sin tocar el original
const hobbies2 = ['Sports', 'Cooking'];
hobbies2.push('Programming');
console.log(hobbies2);
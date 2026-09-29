// Función flecha que recibe el tamaño del café y cualquier cantidad de extras.
// El parámetro ...ingredientes recoge todos los ingredientes restantes en un array.
const prepararCafe = (tamano, ...ingredientes) => {
  // Devolvemos un resumen con el tamaño y los extras separados por coma.
  return `Café ${tamano} con los siguientes extras: ${ingredientes}`;
};

// Pruebas con diferentes cantidades de ingredientes.
console.log(prepararCafe('Grande', 'Leche', 'Azúcar', 'Canela'));
console.log(prepararCafe('Mediano', 'Leche de Avena', 'Vainilla', 'Canela'));
console.log(prepararCafe('Pequeño', 'Azúcar'));

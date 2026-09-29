const desactivarBomba = (codigo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (codigo === '1234') {
        resolve('¡Bomba desactivada con éxito!');
      } else {
        reject('¡Código incorrecto! Boooom');
      }
    }, 2000);
  });
};

// Ejemplo correcto
console.log('Intentando desactivar bomba con código incorrecto...');
desactivarBomba('1234')
.then((mensaje) => {
    console.log(mensaje);
})
.catch((error) => {
    console.log(error);
});

// Ejemplo incorrecto
console.log('Intentando desactivar bomba con código correcto...');
desactivarBomba('0000')
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });

//1. definicion manula de promesa
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('¡Datos recibidos!');
    }, 2000);
});

//2. consumo y encadenamiento lineal con .then()
setTimeout(() => {
    console.log('timer completado');

    fechData().then(text => {
        console.log(text);
        return fechData(); //devuelve una nueva promesa para encadenar el siguiente .then()
    })
    .then(text2 => {
        console.log(text2);
        
    });
}, 2000);
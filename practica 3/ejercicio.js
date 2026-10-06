const http = require('http');
const routes = require('./router');

// Muestra el texto exportado por el router al iniciar el servidor.
console.log(routes.someText);

// Crea el servidor usando el manejador de rutas de router.js.
const server = http.createServer(routes.handler);

// Escucha peticiones HTTP en el puerto 3004.
server.listen(3004);
const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('Primer middleware');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('Segundo middleware');
  res.send('<h1>Hola Carlos</h1><h2>Lista de Usuarios</h2><ul><li>Usuario1</li><li>Usuario 2</li></ul>');
 
});

app.use('/', (req, res, next) => { 
    console.log('in another middleware');
    res.send('<h1>Bienvenido a la pagina principal</h1>');
});

const server = http.createServer(app);

server.listen(3000);
const http = require('http');
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  console.log('esto se ejecuta siempre');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('in another middleware');
  res.send('<h1>Agregando producto</h1>');
  //no llamo a next para que no se ejecute lo de abajo
});

app.use('/', (req, res, next) => { 
    console.log('in another middleware');
    res.send('<h1>Bienvenido a la pagina principal</h1>');
});

const server = http.createServer(app);

server.listen(3000);
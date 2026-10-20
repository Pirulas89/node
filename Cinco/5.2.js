const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Agregar producto</button></form>');
  //no llamo a next para que no se ejecute lo de abajo
});

app.use('/product', (req, res, next) => {
  console.log(req.body); //pedir el body
  res.redirect('/');//usamos par redirigir a home despues de añadir un producto
});

app.use('/', (req, res, next) => { 
    res.send('<h1>Bienvenido a la pagina principal</h1>');
});

const server = http.createServer(app);

server.listen(3004);
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => { 
    res.send('<h1>Bienvenido a la pagina principal</h1>');
});

module.exports = router;
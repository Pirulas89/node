const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.post('/users', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
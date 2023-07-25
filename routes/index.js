const express = require('express');
const router = express.Router();

const messages = [
  {
   text: 'Hi there!',
   user: 'Juan de los palotes',
   added: new Date() 
  },
  {
    text: 'Hello World!',
    user: 'Wulfis the First',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});


module.exports = router;

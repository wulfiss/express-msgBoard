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
  res.render('index', { title: 'Mini MessageBoard', link: '/new', messages: messages });
});

router.get('/new', (req, res, next) => {
   res.render('form',{ title: 'Form'});
})
  
router.post('/new', (req, res, next) => {
  const newMessage = req.body.newMessage;
  const userName = req.body.userName;
  
  messages.push({text: newMessage, user: userName, added: new Date()});
    
  res.redirect('/');
})

module.exports = router;

const express = require('express');
const router = express.Router();

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
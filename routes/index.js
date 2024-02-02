const express = require('express');
const router = express.Router();
const userModel=require('./user');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
  res.redirect('/login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup',async (req,res)=>{
    const userCreated= await userModel.create({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
    });
    res.send(userCreated);
});

module.exports = router;
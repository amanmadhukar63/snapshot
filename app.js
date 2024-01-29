const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const userModel=require('./routes/user');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/logout', (req, res) => {
  res.redirect('/login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup',async (req,res)=>{
  const userCreated= await userModel.create({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
  });
  res.send(userCreated);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
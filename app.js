const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
// const mongoose = require('mongoose');
// const url=require('./secrets');


// mongoose.connect(url);

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

app.post('/signup',(req,res)=>{
  console.log(req.body);
  res.send("done");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
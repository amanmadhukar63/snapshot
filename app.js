// const express = require('express')
var express=require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000

// app.use((req,res,next)=>{
//     // res.send("hello from appUse");
//     next();
// })
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname+'/public/Login/login.html');
});

app.get('/logout', (req, res) => {
  res.redirect('/login');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname+'/public/Signup/signup.html');
});

app.post('/signup',(req,res)=>{
  console.log(req.body);
  res.send("done");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
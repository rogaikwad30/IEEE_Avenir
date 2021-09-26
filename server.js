const express = require('express')  

const app = express() 
app.set('view engine', 'html')
app.set('views',"html")
app.use(express.static("public"))

app.get('/',function(req,res) {
    res.sendFile(__dirname+'/html/galacticback.html')
  });
  app.get('/news',function(req,res) {
    res.sendFile(__dirname+'/html/news.html')
  });
  app.get('/index',function(req,res) {
    res.sendFile(__dirname+'/html/index.html')
  });
app.get('/asteroid',function(req,res) {
    res.sendFile(__dirname+'/html/asteroid.html')
  });
  app.get('/space_shuttle',function(req,res) {
    res.sendFile(__dirname+'/html/space_shuttle.html')
  });
  app.get('/colonise',function(req,res) {
    res.sendFile(__dirname+'/html/colonise.html')
  });
  app.get('/r_and_d',function(req,res) {
    res.sendFile(__dirname+'/html/r_and_d.html')
  });

  app.get('/big_bang',function(req,res) {
    res.sendFile(__dirname+'/html/big_bang.html')
  });

var port = process.env.PORT || 8000; 
app.listen(port);
console.log("Server running")
const express = require('express')  

const app = express() 
app.set('view engine', 'html')
app.set('views',"html")

app.get('/',function(req,res) {
    res.sendFile(__dirname+'/html/dashboard.html')
    console.log()
  });

var port = process.env.PORT || 8000; 
app.listen(port);
console.log("Server running")
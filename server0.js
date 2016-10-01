var express = require("express")
var app = express();
var unix = null
var natural = null
app.param('para', function(req,res,next,para){
  req.para = para
  next()
})
app.get('/:para', function (req, res) {
  var input = req.para
  if(input.indexOf(',') != -1){
    unix = new Date(input).getTime()
    //natural = input
    natural = new Date(unix).toDateString()
  }
  else if(!isNaN(input)){
    //unix = new Date(input).getTime()
    unix = Number(input)
    natural = new Date(input*1000).toDateString()
  }
  
  res.send(JSON.stringify({"input":input, "unix": unix, "natural": natural}));
});

app.listen(8080);
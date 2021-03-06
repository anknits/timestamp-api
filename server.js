var express = require("express")
var moment = require("moment")
var app = express();
var unix = null
var natural = null
app.param('para', function(req,res,next,para){
  req.para = para
  next()
})
app.get('/:para', function (req, res) {
  var input = req.para
  if(moment(input, 'MMMM DD, Y', true).isValid()){
    var date = moment(input, 'MMMM DD, Y', true)
    unix = date.unix()
    natural = input
  }
  else if(!isNaN(input)){
    //unix = new Date(input).getTime()
    unix = Number(input)
    natural = moment(input*1000).format('MMMM DD, Y')
  }
  res.send(JSON.stringify({"unix": unix, "natural": natural}));
});

app.listen(8080);
var chrono = require('chrono-node')
var express = require('express')
var app = express()

app.get("/:date", function (req, res) {
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  var d
  var obj
  if (Number.isInteger(Number(req.params.date.slice(5)))) {
  d = new Date(Number(req.params.date.slice(5))*1000)
  } else {
  d = new Date(chrono.parseDate(req.params.date.slice(5)))
  }
obj = {unix:d.getTime()/1000, natural:monthNames[d.getMonth()]+" "+d.getDate()+","+d.getFullYear()}
  res.send(obj)
})

app.listen(process.env.PORT, process.env.IP)

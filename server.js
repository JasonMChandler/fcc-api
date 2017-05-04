var chrono = require('chrono-node')
var express = require('express')
var app = express()

app.get("/:date", function (req, res) {
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  var d
  var obj
  var unixTime
  var naturalTime
  var input = req.params.date.slice(5)
  var readable = chrono.parseDate(input)
  if (Number.isInteger(Number(input))) {
  d = new Date(Number(input)*1000)
  unixTime = d.getTime()*(0.001)
  naturalTime = monthNames[d.getMonth()]+" "+d.getDate()+","+d.getFullYear()
  } else if (readable !== null){
  d = new Date(chrono.parseDate(input))
  unixTime = d.getTime()*(0.001)
  naturalTime = monthNames[d.getMonth()]+" "+d.getDate()+","+d.getFullYear()
  } else {
  unixTime = null
  naturalTime = null
  }
  
obj = {unix:unixTime, natural:naturalTime}
  res.send(obj)
})

app.listen(process.env.PORT, process.env.IP)

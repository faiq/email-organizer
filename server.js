var express = require("express")
  , http = require("http")
  , path = require('path')
  , router = express() 

router.use(express.static(path.join(__dirname + '/public')))
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})
router.get('/emails', function (req,res) {
  var yo = [
    { id: 1, from: 'chris wiggins', snippet: 'ayyy lmao', date: '1/1/2015', listName: 'read'},
    { id: 2, from: 'chris wiggins', snippet: 'tsss papapa', date: '1/1/2015', listName: 'not read'},
    { id: 3, from: 'chris wiggins', snippet: 'read thing', date: '1/1/2015', listName: 'read'}
  ]
  res.send(yo)
})

http.createServer(router).listen('3000', '127.0.0.1')
var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/add', function (req, res) {
  db.addUser(req.body, req.app.get('connection'))
  .then(function (user) {
    res.redirect('/')
  })
})




module.exports = router

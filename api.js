const express = require('express')
const router = express.Router()
const necesidades = require('./necesidades')

router.get('/necesidades', function (req, res) {
  res.json(necesidades)
})

module.exports = router
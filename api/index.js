const express = require('express')
const fs = require('fs')

const app = express()

app.get('/api', (req, res) => {
  let work = JSON.parse(fs.readFileSync('data/work.json'))
  res.status(200).json(work)
})

module.exports = app

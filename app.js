const express = require('express')
const app = express()

const portHttps = 443

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(portHttps, () => {
  console.log(`Example app listening on port ${portHttps}`)
})
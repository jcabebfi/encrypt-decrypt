const express = require('express')
require('dotenv').config()
const { encrypt, decrypt } = require('./helper/crypto')

let app = express()
const PORT = process.env.PORT

app.use(express.json())

app.listen(PORT || 6969, () => {
  console.log(`Server is running on PORT:${PORT}` )
})

app.post('/encrypt', (req,res) => {
  const { textArray } = req.body
      , result = []
  for (let text of textArray) {
    result.push(encrypt(text))
  }

  res.status(200).json(result)
})

app.post('/decrypt', (req,res) => {
  const { textArray } = req.body
      , result = []
  for (let text of textArray) {
    result.push(decrypt(text))
  }

  res.status(200).json(result)
})

console.log("HELLO")
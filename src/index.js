
import express from 'express'
import dotenv from 'dotenv'
import { encrypt, decrypt } from './helper/crypto'
dotenv.config()

let app = express()
const PORT = process.env.PORT

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}` )
})

app.use('/encrypt', (req,res) => {
  const { textArray } = req
      , result = []
  for (let text of textArray) {
    result.push(encrypt(text))
  }

  res.status(200).send(result)
})

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send("<h1>Server listening!!!</h1>")
})

app.listen(3000, () => {
  console.log('Server is listening!')
})
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send("<h1>CI/CD working!</h1>")
})

app.get("/success", (req, res) => {
  return res.send("<h1>You have successfully implmented CI/CD!</h1>")
})

app.listen(3000, () => {
  console.log('Server is listening!')
})
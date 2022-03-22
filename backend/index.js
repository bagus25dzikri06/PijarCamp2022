//declare express
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { UsersController } = require('./db')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', UsersController.selectAll)
app.get('/users/:id', UsersController.selectById)
app.post('/users', UsersController.insert)
app.put('/users/:id', UsersController.update)
app.delete('/users/:id', UsersController.removeById)

//run express
app.listen(port, () => {
    console.log('Service running on port 3000')
})
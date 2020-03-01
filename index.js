const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')

const app = express()
const print = console.log

app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/createUser', (req, res) => {
    store
        .createUser({
          name: req.body.name,
          contact : req.body.contact
      })
    .then(() => res.sendStatus(200))
})
app.listen(7555, () => {
    print('Server running on http://localhost:7555')
})

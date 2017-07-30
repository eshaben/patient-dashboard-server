var knex = require('./db/knex.js')
var express = require('express')
var server = express()
var cors = require('cors')
var bodyParser = require('body-parser')

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false}))

server.get('/', (req, res)=> {
  knex('patient').select('*')
  .then(patients => {
    res.json(patients)
  })
})

server.get('/:id', (req, res)=> {
  let id = req.params.id
  knex('patient').where('id', id).first()
  .then(patient => {
    res.json(patient)
  })
})

server.post('/', (req, res) => {
  let post = req.body
  knex('patient').insert(post)
  .returning('*')
  .then(patient => {
    res.json({
      patient: patient,
      message: "success"
    })
  })
})

server.put('/:id', (req, res) => {
  let id = req.params.id;
  let edit = req.body;
  knex('patient').where('id', id).update(edit)
  .returning('*')
  .then(edited => {
    res.json({
      edited: edited,
      message: "success"
    })
  })
})

server.delete('/:id', (req, res) => {
  let id = req.params.id;
  knex('patient').where('id', id).del()
  .then(deleted => {
    res.json({
      deleted: deleted,
      message: "success"
    })
  })
})



server.listen(3000)

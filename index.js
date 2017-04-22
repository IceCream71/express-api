'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
let mongoClient = MongoClient.connect('mongodb://localhost:27017/telegram')

let app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.users.find({"name": /m/})

app.get('/data/:query', (req, res) => {
  const query = req.params.query
  console.log(query)
  mongoClient.collection('telegram_data').find({"message": /query/})
  .then((err, data) => {
    res.json(data)
  })
});

app.get('/sum', (req,res) => {
  mongoClient.collection('telegram_data').find({})
  .then((err, data) => {
    res.json({'count': data.length})
  })
})


app.listen(3000)

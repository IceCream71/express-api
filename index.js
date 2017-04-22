'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
let mongoClient
MongoClient.connect('mongodb://localhost:27017/telegram', (err, db) => {
  if (!err) mongoClient = db
})

let app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// db.users.find({"name": /m/})

app.get('/data/:query', (req, res) => {
  const query = req.params.query
  console.log(query)
  mongoClient.collection('telegram_data').find({message: new RegExp(query, 'i')}).toArray()
  .then((data) => {
    console.log(data)
    res.json(data)
  })
});

app.get('/sum', (req,res) => {
  mongoClient.collection('telegram_data').find({}).toArray()
  .then((data) => {
    res.json({'count': data.length})
  })
})


app.listen(3000, () => {
  console.log('listening on port 3000:')
})

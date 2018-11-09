'use strict'
const express = require('express'),
      logger = require('morgan'),
      routes = require('./routes/index'),
      app = express(),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser')

require('dotenv').config()

app.use(require('cors')())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',routes);

// mongoose.connect("mongodb://localhost:27017/blocks");
mongoose.connect("mongodb://allUser:!90997Sncm@ds157383.mlab.com:57383/blocks")
module.exports = app
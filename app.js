'use strict'
const express = require('express'),
      logger = require('morgan'),
      routes = require('./routes/index'),
      app = express(),
      mongoose = require('mongoose')

require('dotenv').config()

app.use(require('cors')())
app.use(logger('dev'))

app.use('/',routes);

// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// if (app.get('env') === 'development') {
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500)
//     res.send({
//       message: err.message,
//       error: err
//     })
//   })
// }

// app.use((err, req, res, next) => {
//   res.status(err.status || 500)
//   res.send({
//     message: err.message,
//     error: {}
//   })
// })

mongoose.connect("mongodb://localhost:27017/maso");
module.exports = app
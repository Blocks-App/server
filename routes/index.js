'use strict'
const express = require('express'),
      router = express.Router(),
      upload = require('../helpers/upload')

// GET
router.get('/', (req, res, next) => {
  
})



router.post('/upload', upload.multer.single('file'), upload.sendUploadToGCS, (req, res) => {
  res.send({
    status: 200,
    message: 'Your file is successfully uploaded',
    link: req.file.cloudStoragePublicUrl
  })
})

module.exports = router

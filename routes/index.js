'use strict'
const express = require('express'),
      router = express.Router(),
      upload = require('../helpers/upload'),
      SongController = require('../controllers/song');

// GET
// router.get('/', (req, res, next) => {
  
// })

// CREATE
router.post('/song', SongController.create);

// POST SONG
router.post('/songUrl', upload.multer.single('file'), upload.sendUploadToGCS, (req, res) => {
  res.send({
    status: 200,
    message: 'Your file is successfully uploaded',
    link: req.file.cloudStoragePublicUrl
  })
})



module.exports = router

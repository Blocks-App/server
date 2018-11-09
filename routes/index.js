'use strict'
const express = require('express'),
      router = express.Router(),
      upload = require('../helpers/upload'),
      SongController = require('../controllers/song');

// CREATE
router.post('/song', SongController.create);
router.get('/song', SongController.getAll) // get all songs
router.get('/song/:id', SongController.getOne) // get all songs
router.delete('/song/:id', SongController.delete); //deletes a song

// POST SONG
router.post('/upload', upload.multer.single('file'), upload.sendUploadToGCS, (req, res) => {
  res.send({
    status: 200,
    message: 'Your file is successfully uploaded',
    link: req.file.cloudStoragePublicUrl
  })
})

module.exports = router

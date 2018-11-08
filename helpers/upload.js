'use strict'
require('dotenv').config()

const Storage = require('@google-cloud/storage')

// TAKING ALL FROM YOUR ENV
const CLOUD_BUCKET = process.env.CLOUD_BUCKET
const storage = Storage({
  projectId: process.env.GCLOUD_PROJECT,
  keyFilename: process.env.KEYFILE_PATH
})
const bucket = storage.bucket(CLOUD_BUCKET)

// PUBLIC URL DIRETURN SAMA
const getPublicUrl = (filename) => {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename.replace(/ /g, '')}`
}

const sendUploadToGCS = (req, res, next) => {
  if (!req.file) {
    return next()
  }

  const gcsname = Date.now() + req.file.originalname.replace(/ /g, '')

  // ENCODED DATA
  const file = bucket.file(gcsname)

  // BUFFER FILE
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  })

  // KALAU ERROR WRITE STREAM
  stream.on('error', (err) => {
    req.file.cloudStorageError = err
    console.log(`error: ${err}`)
    next(err)
  })

  // RETURNS NOTHING AFTER SREAMING
  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    // console.log(`data: ${data}`)
    file.makePublic().then(() => {

      // INI ACTUAL LINKNYA
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
      next()
    })
  })

  stream.end(req.file.buffer)
}

const Multer = require('multer'),
      multer = Multer({
        storage: Multer.MemoryStorage
      })

module.exports = {
  getPublicUrl,
  sendUploadToGCS,
  multer
}
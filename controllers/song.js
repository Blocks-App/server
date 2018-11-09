const axios = require('axios'),
      jwt = require('jsonwebtoken'),
      ObjectId = require('mongodb').ObjectId,
      crypto = require('crypto'),
      cryptoRandomString = require('crypto-random-string'),
      Song = require('../models/song')
      // sgMail = require('@sendgrid/mail');

require('dotenv').config()

class SongController {

  // create
  static create(req, res) {
    console.log(`ini req body:`)
    console.log(req.body)
    const inp = req.body
    let newSong = new Song({
      title: inp.title,
      artist: inp.artst,
      genre: inp.genre,
      coverUrl: inp.coverUrl,
      audioUrl: inp.audioUrl
    });

    newSong.save()
      .then(data => res.json(data))
      .catch(err => res.json(err))
  }

  static update(req, res) {
    const inp = req.body
  }

  static delete(req, res) {
    const songId = req.params.id
    Song.deleteOne({  })
  }

  // GET ALL
  static getAll(req, res) {
    Song.find()
      .exec((err, data) => {
        res.json(data)
      })
  }

  // GET ONE BY ITS ID
  static getOne(req, res) {
    const songId = req.params.id
    Song.findById(songId, (err, data) => {
      data ? res.json(data) : res.status(500).json(err)
    })
  }


}

module.exports = SongController;
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
    const inp = req.body
    let newSong = new Song({
      title: inp.title,
      artist: inp.artst,
      genre: inp.genre,
      UserId: ObjectId(inp.UserId),
      coverUrl: inp.coverUrl,
      audioUrl: inp.audioUrl
    });
  }

  static update(req, res) {
    const inp = req.body
  }
}

module.exports = SongController;
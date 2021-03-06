const express = require('express');
const router = express.Router();
const spotifyBackend = require('../API/spotify_api_calls');

router.get('/', function (req, res, next) {
  res.render('index', {
      title: 'danceability'
  });
});

router.get('/login', function (req, res) {
  spotifyBackend.spotifyLogin(res);
});

router.get('/callback', function (req, res) {
  spotifyBackend.spotifyAuth(req, res)
});

router.get('/app', function (req, res, next) {
// console.log(req.session)
  const { audio_features } = req.session
  // console.log(audio_features)
  res.render('visualization', {
    audio_features: audio_features
  })
})

module.exports = router;




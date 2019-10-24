const express = require('express');
const router = express.Router();
const spotifyBackend = require('../API/spotify_api_calls');

router.get('/', function (req, res, next) {
    console.log('we are in the index')
    res.render('index', {
        title: 'Dance!'
    });
});

router.get('/login', function (req, res) {
    console.log("we are in the login")
    spotifyBackend.spotifyLogin(res);
});

router.get('/callback', function (req, res) {
    console.log("we are in the callback")
    spotifyBackend.spotifyAuth(req, res)
});


router.get('/app', function (req, res, next) {
    const { audio_features } = req.session
    res.render('visualization', {
        audio_features: audio_features
    })
})

module.exports = router;




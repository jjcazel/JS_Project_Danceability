const express = require("express");
const router = express.Router();
const spotifyBackend = require("./spotify_api_calls");

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "danceability",
  });
});

router.get("/login", function (req, res) {
  spotifyBackend.spotifyLogin(res);
});

router.get("/callback", function (req, res) {
  spotifyBackend.spotifyAuth(req, res);
});

router.get("/app", function (req, res, next) {
  if (req.session && req.session.audio_features) {
    res.render("visualization", {
      audio_features: req.session.audio_features,
    });
  } else {
    // Handle the case where audio_features is not available
    res.render("visualization", {
      audio_features: {}, // Send an empty object or appropriate default value
    });
  }
});

module.exports = router;

const SpotifyWebApi = require('spotify-web-api-node');
const querystring = require('querystring');
const clusterMaker = require('clusters');


var client_id = '';
var client_secret = '';
var redirect_uri = 'http://danceability1.herokuapp.com/callback'
var stateKey = 'spotify_auth_state';
// let client_id = 'efe8564cdab24aeda7bf97b81c57683d';
// let client_secret = '01ae9dd3d2204d35886d7012f6c32540';

              
module.exports.spotifyLogin = function (res) {
  let state = generateRandomString(16);
  res.cookie(stateKey, state);
  let scope = 'user-top-read user-read-recently-played';
  res.redirect('https://accounts.spotify.com/authorize?' +
  querystring.stringify({
    response_type: 'code',
    client_id: client_id, 
    scope: scope,
    redirect_uri: redirect_uri,
    state: state
  }));
};

function generateRandomString(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: redirect_uri
});

module.exports.spotifyAuth = function (req, res) {
  let track_info = []
  let audio_features = [] 
  spotifyApi.authorizationCodeGrant(req.query.code).then(function (data) {
    
    // console.log(data)
    spotifyApi.setAccessToken(data.body.access_token);
    spotifyApi.setRefreshToken(data.body.refresh_token);
    return spotifyApi.getMe()

  }).then(function (userData) {
    spotifyApi
      .getMyTopTracks({ limit: 50 })
      .then(function (data) {
        // console.log(data)
        return data.body.items.map(track => {
          if (!track.name.includes(" ")) {
            track.name += " "
          }
          track_info.push({ [track.id]: [track.name, track.artists[0].name] })
          return track.id
        })
      })
      .then(function (trackIds) {
        return spotifyApi.getAudioFeaturesForTracks(trackIds)
      })
      .then(function (data) {
        data.body.audio_features.forEach((track, idx) => {
          song_name = track_info[idx][track.id][0]
          artist_name = track_info[idx][track.id][1]
    
          audio_features.push({
            "title": song_name,
            "id": track.id,
            "artist": artist_name,
            "idx": idx,
            //how danceable a song is 0-1
            "danceability": track.danceability,
            //perceptual measure of intensity and activity
            //fast, loud, noisy -> 1
            "energy": track.energy,
            "key": track.key,
            //loudness in decibels, between -60 and 0db
            "loudness": track.loudness,
            "mode": track.mode,
            //0-1, 0.5-1 being instrumentals w/ increasing confidence
            "instrumentalness": track.instrumentalness,
            //musical positiveness 0-1, sad, depressed, angry -> happy, cheerful, euphoric
            "valence": track.valence,
            //averaged tempo for a song
            "tempo": track.tempo,
          })
        })
        req.session.audio_features = audio_features
        req.session.track_info = track_info
        res.redirect('/app')
      })
  }).catch(error => console.log(error))
}


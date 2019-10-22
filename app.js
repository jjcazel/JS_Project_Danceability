const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables



app.use(express.static("dist"));

app.get("/", (request, res) => {    
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.get('/login', (request, res) => {
    // const state = generateRandomString(16);
    // var scope = 'user-read-private';
    res.redirect(`https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&redirect_uri=${redirect_uri}`)
    // res.redirect(`https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&scope=${scope}&state=${state}&redirect_uri=${redirect_uri}`)
    
});




 

app.get('/app', (request, res) => {
    // console.log(1, request.query)
    // const authorizationCode = request.params.authorizationCode
    // res.send('hello')
    // res.redirect(`https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&redirect_uri=${redirect_uri}`)
    // 
        // const AccessToken= data.body.access_token;
        // const RefreshToken = data.body.refresh_token;
        // axios.get('https://api.spotify.com/v1/me/top/tracks', { headers: { Authorization: `Bearer ${AccessToken}` } })
        //     .then(res => {
                // debugger
            //     console.log(res)
            // }, error => console.log(error))
        spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 })
            .then(
                function (data) {
                    return(data.body);
                },
                function (err) {
                    console.error(err);
                }
            );
    

            

    // }), error => console.log(2, error)
    // .then(function (userData) {
    //     console.log("second .then")
    //     console.log(userData) 
    // })
   
    // .then(() => console.log("success"), () => console.log("error"))
        //     .then(function (data) {
        //         return data.body.items.map(track => {
        //             // if (!track.name.includes(" ")) {
                      
        //             return track.id
        //         // }
        //     })
        //     .then(function (trackIds) {
        //         return spotifyApi.getAudioFeaturesForTracks(trackIds)
        //     })
        //     .then(function (data) {
        //         data.body.audio_features.forEach((track, idx) => {
        //             song_name = track_info[idx][track.id][0]
        //             artist_name = track_info[idx][track.id][1]
                    // if (idx <= 4) {
                    //     seeds_medium.push(track.id)
                    // }
                    // audio_features.push({
                    //     "title": song_name,
                    //     "id": track.id,
                    //     "artist": artist_name,
                        // "idx": idx,
                        //how danceable a song is 0-1
                        // "danceability": track.danceability,
                        //perceptual measure of intensity and activity
                        //fast, loud, noisy -> 1
                        // "energy": track.energy,
                        // "key": track.key,
                        //loudness in decibels, between -60 and 0db
                        // "loudness": track.loudness,
                        // "mode": track.mode,
                        //0-1, 0.5-1 being instrumentals w/ increasing confidence
                        // "instrumentalness": track.instrumentalness,
                        //musical positiveness 0-1, sad, depressed, angry -> happy, cheerful, euphoric
                        // "valence": track.valence,
                        //averaged tempo for a song
                        // "tempo": track.tempo,
                    // })
            //     })
            // })
        // })

    // }).catch(error => console.log(error))

// })

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`);
})
   
    // const access_url = "https://accounts.spotify.com/api/token";
    // const trackId = '2TpxZ7JUBn3uw46aR7qd6V'
    // console.log('fetching')
    // fetch(access_url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     body: {grant_type: client_credentials & client_id=${'efe8564cdab24aeda7bf97b81c57683d'}& client_secret=${'01ae9dd3d2204d35886d7012f6c32540'}`
    // }).then(res => response.text('success'), error => response.send(error))

    
// });

// create a search route
// app.get("/search", (request, response) => {
//     fetch
// });


// app.get('/login', function (req, res) {
//     var scopes = 'user-read-private user-read-email';
//     res.redirect('https://accounts.spotify.com/authorize' +
//         '?response_type=code' +
//         '&client_id=' + my_client_id +
//         (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//         '&redirect_uri=' + encodeURIComponent(redirect_uri));
// });
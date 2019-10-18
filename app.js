const express = require("express");
const app = express();
const path = require("path");
var SpotifyWebApi = require('spotify-web-api-node');
const PORT = process.env.PORT || 443; // process.env accesses heroku's environment variables


var fs = require('fs')
var https = require('https')

var certOptions = {
    key: fs.readFileSync(path.resolve('server.key')),
    cert: fs.readFileSync(path.resolve('server.crt'))
}

const redirect_uri = 'https://localhost:443/app'

app.use(express.static("dist"));

app.get("/", (request, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.get('/login', (request, res) => {
    res.redirect(`https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&redirect_uri=${redirect_uri}`)
    
})
app.get('/app', (request, res) => {
    console.log(res)
    // const authorizationCode = request.params.authorizationCode
    res.send('hello')
    // res.redirect(`https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&redirect_uri=${redirect_uri}`)
    
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

// app.listen(PORT, () => {
//     console.log(__dirname);
//     console.log(`listening on ${PORT}`);
// })

var server = https.createServer(certOptions, app).listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`);
})
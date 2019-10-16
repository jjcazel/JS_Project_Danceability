const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static("dist"));

app.get("/", (request, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

// create route to get single book by its isbn
app.get("/books/:isbn", (request, response) => {
//     // make api call using fetch
//     fetch(
//         `http://openlibrary.org/api/books?bibkeys=ISBN:${request.params.isbn}&format=json&jscmd=data`
//     )
//         .then(response => {
//             return response.text();
//         })
//         .then(body => {
//             let results = JSON.parse(body);
//             console.log(results); // logs to server
//             response.send(results); // sends to frontend
//         });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const access_url = "https://accounts.spotify.com/api/token";
    fetch(proxyurl + access_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `grant_type = client_credentials & client_id=${'efe8564cdab24aeda7bf97b81c57683d'}& client_secret=${'01ae9dd3d2204d35886d7012f6c32540'}`
    })
    const trackId = '2TpxZ7JUBn3uw46aR7qd6V'

    const audioFeatures = fetch(`https://api.spotify.com/v1/audio-features/${trackId}`)
    console.log(audioFeatures)
    const danceability = audioFeatures[danceability]
});

// // create a search route
// app.get("/search", (request, response) => {
//     fetch(`http://openlibrary.org/search.json?q=${request.query.string}`)
//         .then(response => {
//             return response.text();
//         })
//         .then(body => {
//             let results = JSON.parse(body);
//             console.log(results);
//             response.send(results);
//         });
// });

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`);
})
const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static("dist"));

app.get("/", (request, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.get('/login', (request, res) => {
    res.redirect('https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A8000%2Fapp')
    
})
app.get('/app', (request, res) => {
    debugger
    const authorizationCode = request.params.authorizationCode
    res.redirect('https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A8000%2Fapp')
    
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

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`);
})
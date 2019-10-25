const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const index = require('./src/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));
app.use(expressSession({
    secret: 'secret'
}));

app.use('/', index);


module.exports = app;



// app.use(express.static("dist"));

// app.get("/", (request, res) => {    
//     res.sendFile(path.join(__dirname, "./dist/index.html"));
// });

// app.get('/login', (request, res) => {
    // const state = generateRandomString(16);
    // var scope = 'user-read-private';
    // res.redirect(`https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&redirect_uri=${redirect_uri}`)
    // res.redirect(`https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&scope=${scope}&state=${state}&redirect_uri=${redirect_uri}`)
    
// });

// app.get('/app', (request, res) => {
    // console.log(1, request.query)
    // const authorizationCode = request.params.authorizationCode
    // res.send('hello')
    // res.redirect(`https://accounts.spotify.com/authorize?client_id=efe8564cdab24aeda7bf97b81c57683d&response_type=code&redirect_uri=${redirect_uri}`)
    // 
// })

// app.listen(PORT, () => {
//     console.log(__dirname);
//     console.log(`listening on ${PORT}`);
// })
   
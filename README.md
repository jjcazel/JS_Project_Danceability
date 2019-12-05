# Welcome to Danceability!

`## Background and Overview`
Check out the live site [here](https://danceability1.herokuapp.com/)

Danceability is a data visualization tool that will allow you to login to your Spotify account,get your top 50 tracks and see their danceability (and energy) factor. You will see the most danceable songs and their rank according to what you listen to most.

The motivation for this project was to do something that was music related and uses Spotify's API. I wanted to learn how to use popular APIs and display data using the d3.js library as well as HTML. 

![gif](src/ezgif.com-gif-maker.gif)
<!-- ## Functionality and MVP Features
* JavaScipt for functionality
* CSS for styling and visuals
* Spotify API and Spotify WebApi
* HTML
* Node.js server and Express.js RESTful Routes
* D3 data visualization libray -->

`## MVPs`
* Log in to a user's Spotify account to get their personalized listening history.
* Use d3.js library to graph the user's track info with data plot points and render track info in tooltips on mouse hover.
* Style with CSS and HTML.

`### Spotify Login`
* allows for each user to login with his/her own credentials
* makes the appropriate calls to the Spotify Web API with proper OAuth

``` javascript
let redirect_uri = 'https://danceability1.herokuapp.com/callback'
let stateKey = 'spotify_auth_state';
let client_id = 'efe8564cdab24aeda7bf97b81c57683d';
let client_secret = '01ae9dd3d2204d35886d7012f6c32540';

              
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

```

`### Graphing the data`
* Using the d3.js library, the plot points are created as circles based with size based on their rank.
* Plot points include track info when overed over with the mouse.

``` javascript
svg.append('g')
      .selectAll("dot")
      .data(tracks)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return x(d.energy); })
      .attr("cy", function (d) { return y(d.danceability); })
      .attr('r', function (d) {
        return Math.sqrt((50 - d.idx) * 15)})
      .style("opacity", 0.6)
      .style("fill", function () {
        return "hsl(" + Math.random() * 320 + ",80%,60%)";})
      .attr('stroke', function (d) {
        return strokes[d.idx % 7]})
      .on("mouseover", function (d) {
        d3.select(this)
      .style("opacity", 1)
        div.transition()
      .duration(200)
      .style("opacity", .9);
        div.html("Rank: " + (d.idx + 1) + "<br/>" + `"${d.title}"` + "<br/>" + d.artist + "<br/>" + "Danceability: " +
        `${d.danceability}` + "<br/>" + "Energy: " + `${d.energy}`)
      .style("left", (d3.event.pageX + 20) + "px")
      .style("top", (d3.event.pageY - 28) + "px");})
      .on("mouseout", function (d) {
        d3.select(this)
      .style("opacity", .6)
        div.transition()
      .duration(500)
      .style("opacity", 0);
      })

```

`## Development Timeline`

1. Get familiar with Spotify API and d3.js library and how I will implement them in my project     Complete project skeleton. `4 Days`  

2. Be able to view a basic page on local host. 
    Set up a Node/Express server and routes to communicate with Spotify API using the Spotify Web Api helper methods.  
    Communicate smoothly between my app and the Spotify API. `6 Days`  

3. Implement the d3.js graph, plot points, and toooltips to visulize the data. 
    Start styling with CSS and d3.js `3 Days`  

4. Finish any improvements to the UI. `4 Days`  



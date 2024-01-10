require('dotenv').config()
const { default: axios } = require('axios');
var express = require('express');
var app = express();
const qs = require('querystring');
const http = require('http');

// Create an instance of the http.Agent with KeepAlive enabled
const agent = new http.Agent({ keepAlive: true, keepAliveMsecs: 15000 });
// console.log('agent', agent)
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI;
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';




// app.get('/', getAuth);

app.get('/login', (req, res) => {
  console.log('enter login')
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'streaming user-read-private user-read-email playlist-modify-public user-read-recently-played playlist-read-private playlist-read-collaborative playlist-modify-private user-read-playback-state user-modify-playback-state user-read-currently-playing user-library-read user-library-modify';
  res.redirect('https://accounts.spotify.com/authorize?' +
  qs.stringify({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectURI,
    state: state
  }));
})



const getAuth = async (req, res) => {
  var code = req.query.code || null;
  const headers = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(clientId+ ':' + clientSecret).toString('base64')),
       }
  };
  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectURI
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    const responseData =  response.data;
    const {access_token, refresh_token, expires_in} = responseData;
    const querystring = qs.stringify({
      access_token,
      refresh_token,
      expires_in
    })
    res.redirect(`http://127.0.0.1:5173/home?${querystring}`)
  } catch (error) {
    console.log(error);
  }
};
app.get('/callback', getAuth);

app.get('/refresh_token', (req, res) => {
  const { refresh_token } = req.query;

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`

    },  
  })
    .then(response => {
      console.log('refresh_token', response.data)
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
});
app.listen(8888, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running,
                    and App is listening on port `+ 8888)
    else
        console.log("Error occurred, server can't start", error);
});


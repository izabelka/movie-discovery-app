const request = require('request');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/popular-movies', (req, res) => {
  let url = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let movies = JSON.parse(body).results;
      res.send(movies)
    }
  })
});

app.get('/api/movie-details/:movieId', (req, res) => {
  let movieId = req.params.movieId;
  let url = `${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let movieDetails = JSON.parse(body);
      res.send(movieDetails)
    }
  })
});

app.get('/api/search/:movie', (req, res) => {
  let movie = req.params.movie;
  let url = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${movie}`;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let searchResults = JSON.parse(body).results;
      res.send(searchResults)
    }
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

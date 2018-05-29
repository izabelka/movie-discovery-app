import request from 'superagent';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const REQUEST_TIMEOUT = 10000;

export async function apiGetPopularMovies() {
  let url = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`;
  return new Promise ((resolve, reject) => {
    let req = request
      .get(url)
      .timeout({
        deadline: REQUEST_TIMEOUT,
      });

    req.end((err, res) => {
      if (err || !res.ok) {
        resolve({ error: err });
        return;
      } else {
        try {
          let body = JSON.parse(res.text),
              movies = body.results;
          resolve( movies );
          return;
        } catch (e) {
          resolve({ error: e });
          return;
        }
      }
    });
  });
}

export async function apiGetMovieDetails(movieId) {
  let url = `${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`;
  return new Promise ((resolve, reject) => {
    let req = request
      .get(url)
      .timeout({
        deadline: REQUEST_TIMEOUT,
      });

    req.end((err, res) => {
      if (err || !res.ok) {
        resolve({ error: err });
        return;
      } else {
        try {
          let movieDetails = JSON.parse(res.text);
          resolve( movieDetails );
          return;
        } catch (e) {
          resolve({ error: e });
          return;
        }
      }
    });
  });
}

import request from 'superagent';

const REQUEST_TIMEOUT = 10000;

export async function apiGetPopularMovies() {
  let url = '/api/popular-movies';
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
          let body = JSON.parse(res.text);
          resolve(body);
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
  let url = `/api/movie-details/${movieId}`;
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
          let body = JSON.parse(res.text);
          resolve(body);
          return;
        } catch (e) {
          resolve({ error: e });
          return;
        }
      }
    });
  });
}

export async function apiSearchMovies(movie) {
  let url = `/api/search/${movie}`;
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
          let body = JSON.parse(res.text);
          resolve(body);
          return;
        } catch (e) {
          resolve({ error: e });
          return;
        }
      }
    });
  });
}

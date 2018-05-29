import request from 'superagent';

const REQUEST_TIMEOUT = 10000;

// componentDidMount() {
// this.callApi()
//   .then(res => this.setState({ response: res.express }))
//   .catch(err => console.log(err));
// }
//
// callApi = async () => {
// const response = await fetch('/api/spr');
// const body = await response.json();
//
// if (response.status !== 200) throw Error(body.message);
//
// return body;
// };

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

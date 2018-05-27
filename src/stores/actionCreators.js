import {
  SET_POPULAR_MOVIES,
} from './actionTypes';
import {
  apiGetPopularMovies,
} from '../api.js';

export function getPopularMovies() {
  return async (dispatch) => {
    let popularMovies = await apiGetPopularMovies();

    dispatch(setPopularMovies(popularMovies));
  }
}

export const setPopularMovies = (moviesList) => {
  return {
    type: SET_POPULAR_MOVIES,
    popularMovies: moviesList,
  };
}

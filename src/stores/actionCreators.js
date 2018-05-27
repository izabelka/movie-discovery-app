import {
  SET_POPULAR_MOVIES,
  UPDATE_APP_STATE,
  SELECT_MOVIE,
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

export const updateAppState = (appState) => {
  return {
    type: UPDATE_APP_STATE,
    appState,
  };
}

export const selectMovie = (movieId) => {
  return {
    type: SELECT_MOVIE,
    selectedMovie: movieId,
  };
}

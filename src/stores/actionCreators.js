import {
  SET_POPULAR_MOVIES,
  UPDATE_APP_STATE,
  SELECT_MOVIE,
} from './actionTypes';
import {
  apiGetPopularMovies,
  apiGetMovieDetails,
} from '../api.js';

export function getPopularMovies() {
  return async (dispatch) => {
    let popularMovies = await apiGetPopularMovies();

    dispatch(setPopularMovies(popularMovies));
  }
}

export function getMovieDetails(movieId) {
  return async (dispatch) => {
    let movieDetails = await apiGetMovieDetails(movieId);

    dispatch(selectMovie(movieDetails));
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

export const selectMovie = (movieDetails) => {
  return {
    type: SELECT_MOVIE,
    selectedMovie: movieDetails,
  };
}

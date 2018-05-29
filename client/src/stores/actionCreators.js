import {
  SET_POPULAR_MOVIES,
  UPDATE_APP_STATE,
  SELECT_MOVIE,
  SEARCH_MOVIES,
} from './actionTypes';
import {
  apiGetPopularMovies,
  apiGetMovieDetails,
  apiSearchMovies,
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

export function movieSearch(movie) {
  return async (dispatch) => {
    let searchResults = await apiSearchMovies(movie);

    dispatch(setSearchResults(searchResults));
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

export const setSearchResults = (results) => {
  return {
    type: SEARCH_MOVIES,
    movieSearchResults: results,
  };
}

import {
  SET_POPULAR_MOVIES,
  UPDATE_APP_STATE,
  SELECT_MOVIE,
  SEARCH_MOVIES,
  SET_PREV_APP_STATE,
} from './actionTypes';

export default (state = {}, action) => {
 switch (action.type) {
  case SET_POPULAR_MOVIES:
   return {
     ...state,
     popularMovies: action.popularMovies,
   }
  case UPDATE_APP_STATE:
    return {
      ...state,
      appState: action.appState,
    }
  case SELECT_MOVIE:
    return {
     ...state,
     selectedMovie: action.selectedMovie,
   }
  case SEARCH_MOVIES:
    return {
      ...state,
      movieSearchResults: action.movieSearchResults,
    }
  case SET_PREV_APP_STATE:
    return {
      ...state,
      prevAppState: action.prevAppState,
    }
  default:
   return state
 }
}

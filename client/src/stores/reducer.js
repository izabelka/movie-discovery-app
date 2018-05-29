import {
  SET_POPULAR_MOVIES,
  UPDATE_APP_STATE,
  SELECT_MOVIE,
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
  default:
   return state
 }
}

import {
  SET_POPULAR_MOVIES,
} from './actionTypes';

export default (state = {}, action) => {
 switch (action.type) {
  case SET_POPULAR_MOVIES:
   return {
     ...state,
     popularMovies: action.popularMovies,
   }
  default:
   return state
 }
}

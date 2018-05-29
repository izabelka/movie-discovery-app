import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './stores/reducer';

export default function configureStore(initialState={}) {
 return createStore(
  reducer,
  {
    appState: 'initial',
    popularMovies: [],
    selectedMovie: null,
  },
  applyMiddleware(thunk)
 );
}

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Movie from '../components/Movie';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from '../store';
import { Provider } from 'react-redux'

configure({ adapter: new Adapter() });

describe('Movie', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Provider store={configureStore()}>
        <Movie
          key="mockKey"
          movieId="mockMovieId"
          title="mockTitle"
          voteAverage="mockVoteAverage"
          posterPath="mockPosterPath"
          overview="mockOverview"
          position="mockPosition" />
      </Provider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

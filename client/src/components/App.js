import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import '../assets/css/reset.css';
import '../assets/css/styles.css';
import {
  getPopularMovies,
} from '../stores/actionCreators';
import Movie from './Movie';
import MovieDetails from './MovieDetails';
import Search from './Search';

class App extends Component {

  componentWillMount = () => {
    this.props.getPopularMovies();
  }

  renderContent = () => {
    switch (this.props.appState) {
      case 'initial':
      return (
        <MoviesWrapper>
          <Search />
          <Header>
            {'Popular Movies'}
          </Header>
          {this.renderMovies()}
        </MoviesWrapper>
      );
      case 'movie-details':
        return (
          <MovieDetails />
        );
      default:
        return (
          <MoviesWrapper>
            <Search />
            <Header>
              {'Popular Movies'}
            </Header>
            {this.renderMovies()}
          </MoviesWrapper>
        );
    }
  }

  renderMovies = () => {
    return (
      this.props.popularMovies.map((movie, index) => (
        <Movie
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          voteAverage={movie.vote_average}
          posterPath={movie.poster_path}
          overview={movie.overview}
          position={index+1} />
      ))
    );
  }

  render() {
    return (
      <Wrapper>
        {this.renderContent()}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 2 * 34px);
  padding: 60px 34px;
  color: #fff;
`;

const Header = styled.h1`
  font-size: 2.2em;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 34px;
`;

const MoviesWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = state => ({
  //...state,
  appState: state.appState,
  popularMovies: state.popularMovies,
});

const mapDispatchToProps = dispatch => ({
 getPopularMovies: () => dispatch(getPopularMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

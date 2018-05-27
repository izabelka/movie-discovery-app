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

class App extends Component {

  componentWillMount = () => {
    this.props.getPopularMovies();
  }

  renderContent = () => {
    switch (this.props.appState) {
      case 'initial':
      return (
        <MoviesWrapper>
          {this.renderMovies()}
        </MoviesWrapper>
      );
      case 'movie-details':
        return (
          <MovieDetails
            movie={this.props.selectedMovie}/>
        );
      default:
        return (
          <MoviesWrapper>
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
  width: 100vw;
`;

const MoviesWrapper = styled.div`
  width: 60%;
  padding: 60px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = state => ({
  //...state,
  appState: state.appState,
  popularMovies: state.popularMovies,
  selectedMovie: state.selectedMovie,
});

const mapDispatchToProps = dispatch => ({
 getPopularMovies: () => dispatch(getPopularMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

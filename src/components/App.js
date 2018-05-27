import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import '../assets/css/reset.css';
import {
  getPopularMovies,
} from '../stores/actionCreators';
import Movie from './Movie';

class App extends Component {

  componentWillMount = () => {
    this.props.getPopularMovies();
  }

  renderMovies = () => {
    return (
      this.props.popularMovies.map((movie, index) => (
        <Movie
          key={movie.id}
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
        <MoviesWrapper>
          {this.renderMovies()}
        </MoviesWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: #000;
  font-family: Helvetica;
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
 popularMovies: state.popularMovies,
});

const mapDispatchToProps = dispatch => ({
 getPopularMovies: () => dispatch(getPopularMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

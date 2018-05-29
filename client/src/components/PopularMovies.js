import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Movie from './Movie';
import Search from './Search';
import {
  getPopularMovies,
} from '../stores/actionCreators';

class PopularMovies extends Component {

  componentWillMount = () => {
    this.props.getPopularMovies();
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
        <Search />
        <Header>
          {'Popular Movies'}
        </Header>
        {this.renderMovies()}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 2.2em;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 34px;
`;

const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
});

const mapDispatchToProps = dispatch => ({
   getPopularMovies: () => dispatch(getPopularMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);

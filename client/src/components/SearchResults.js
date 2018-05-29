import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Movie from './Movie';
import Search from './Search';
import {
  updateAppState,
} from '../stores/actionCreators';

class SearchResults extends Component {

  componentDidMount = () => {
    window.history.pushState(null, null, '');
    window.onpopstate = (event) => {
      this.props.updateAppState('initial')
    };
  }

  renderMovies = () => {
    return (
      this.props.searchResults.map((movie) => (
        <Movie
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          voteAverage={movie.vote_average}
          posterPath={movie.poster_path}
          overview={movie.overview} />
      ))
    );
  }

  render() {
    return (
      <Wrapper>
        <Search />
        <Header>
          {'Results'}
        </Header>
        {this.props.searchResults &&
          this.renderMovies()
        }
        { this.props.searchResults && this.props.searchResults.length < 1 &&
          <NoResultsText>
            {'No Results Found'}
          </NoResultsText>
        }
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

const NoResultsText = styled.p`
  font-size: 1.5em;
`;

const mapStateToProps = state => ({
  searchResults: state.movieSearchResults,
});

const mapDispatchToProps = dispatch => ({
  updateAppState: (appState) => dispatch(updateAppState(appState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

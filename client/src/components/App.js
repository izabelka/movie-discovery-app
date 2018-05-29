import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import '../assets/css/reset.css';
import '../assets/css/styles.css';
import PopularMovies from './PopularMovies';
import MovieDetails from './MovieDetails';
import SearchResults from './SearchResults';

class App extends Component {

  renderContent = () => {
    switch (this.props.appState) {
      case 'initial':
      return (
        <PopularMovies />
      );
      case 'movie-details':
        return (
          <MovieDetails />
        );
      case 'search-results':
        return (
          <SearchResults />
        );
      default:
        return (
          <PopularMovies />
        );
    }
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

const mapStateToProps = state => ({
  appState: state.appState,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

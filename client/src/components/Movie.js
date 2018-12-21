import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  getMovieDetails,
  updateAppState,
  setPrevAppState,
} from '../stores/actionCreators';

class Movie extends Component {

  onMovieClick = () => {
    if (this.props.position) {
      this.props.setPrevAppState('initial');
    } else {
      this.props.setPrevAppState('search-results');
    }
    this.props.getMovieDetails(this.props.movieId);
    this.props.updateAppState('movie-details');
  }

  render() {
    let {
      title,
      poster_path: posterPath,
      vote_average: voteAverage,
      overview,
    } = this.props.movie;
    let position = this.props.position;
    overview = overview.length > 300 ? overview.slice(0, 300) + '…' : overview;
    return (
      <Wrapper
        onClick={this.onMovieClick}>
        {position &&
          <PositionMarker>
            <Position>
              {position}
            </Position>
          </PositionMarker>
        }
        {posterPath &&
          <Poster
            src={`http://image.tmdb.org/t/p/w342//${posterPath}`} />
          }
        <MovieInfo>
          <Title>
            {title}
          </Title>
          <VoteAverage>
            {`⭐️${voteAverage}`}
          </VoteAverage>
          <Description>
            {overview}
          </Description>
        </MovieInfo>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #c8d1dc;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:not(:last-of-type){
    margin-bottom: 22px;
  }
`;

const PositionMarker = styled.div`
  position: absolute;
  top: -16px;
  left: -16px;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Position = styled.span`
  color: #000;
  font-weight: 800;
  font-size: 2em;
`;

const Poster = styled.img`
  height: 240px;
  margin-right: 34px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 10px;
`;

const VoteAverage = styled.span`
  font-size: 1.2em;
  line-height: 1.2em;
  vertical-align: middle;
  margin-bottom: 14px;
`;

const Description = styled.p`
  line-height: 1.4em;
  font-size: 1.3em;
`;

const mapStateToProps = state => ({
  appState: state.appState,
});

const mapDispatchToProps = dispatch => ({
 getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
 updateAppState: (appState) => dispatch(updateAppState(appState)),
 setPrevAppState: (appState) => dispatch(setPrevAppState(appState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

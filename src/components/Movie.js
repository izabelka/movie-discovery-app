import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Movie extends Component {
  render() {
    let {
      title,
      posterPath,
      voteAverage,
      overview,
      position,
    } = this.props;
    return (
      <Wrapper>
        <PositionMarker>
          <Position>
            {position}
          </Position>
        </PositionMarker>
        <Poster
          src={`http://image.tmdb.org/t/p/w342//${posterPath}`} />
        <MovieInfo>
          <Title>
            {title}
          </Title>
          <VoteAverage>
            {voteAverage}
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
  color: #fff;
  position: relative;

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
  font-weight: 600;
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
  font-size: 1.6em;
  font-weight: 600;
`;

const VoteAverage = styled.span``;

const Description = styled.p`
  line-height: 1.4em;
  font-size: 1.3em;
`;

const mapStateToProps = state => ({
  //...state,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

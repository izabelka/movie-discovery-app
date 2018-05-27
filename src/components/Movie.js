import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Movie extends Component {

  render() {
    let { posterPath } = this.props;
    return (
      <Wrapper>
        <Poster
          src={`http://image.tmdb.org/t/p/w342//${posterPath}`} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #c8d1dc;
  border-radius: 4px;

  &:not(:last-of-type){
    margin-bottom: 14px;
  }
`;
const Poster = styled.img`
  height: 240px;
`;

const mapStateToProps = state => ({
  //...state,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

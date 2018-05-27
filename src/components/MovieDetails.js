import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class MovieDetails extends Component {

  render() {
    return (
      <Wrapper>
        {this.props.movie}
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
`;

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

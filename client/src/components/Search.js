import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  movieSearch,
  updateAppState,
} from '../stores/actionCreators';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: '',
    };
  }

  handleSearchInputChange = (e) => {
    const searchInputValue = e.target.value;

    this.setState({
      searchInputValue,
    });
  }

  onSearchClick = () => {
    this.props.movieSearch(this.state.searchInputValue);
    this.props.updateAppState('search-results')
  }

  handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    this.onSearchClick();
  }
}

  render() {
    return (
      <Wrapper>
        <SearchInput
          type="text"
          placeholder="Enter movie title…"
          value={this.state.searchInputValue}
          onChange={(e) => this.handleSearchInputChange(e)}
          onKeyPress={this.handleKeyPress} />
        <SearchButton
          onClick={this.onSearchClick}>
          {'Search'}
        </SearchButton>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

const SearchInput = styled.input`
  height: 38px;
  line-height: 38px;
  vertical-align: middle;
  border-radius: 100px;
  padding: 0px 20px;
  text-align: left;
  font-size: 1.2em;
  -webkit-appearance: none;
  outline: none;
  background-color: #fff;
  color: #000;
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  color: #000;
  background-color: #c8ec36;
  margin-left: 14px;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 100px;
`;

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  movieSearch: (str) => dispatch(movieSearch(str)),
  updateAppState: (appState) => dispatch(updateAppState(appState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

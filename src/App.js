import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {
  simpleAction,
  focusOnCreateRoomInput,
} from './stores/actionCreators'
class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
    this.props.focusOnCreateRoomInput(!this.props.isRoomInputFocused);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>

        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //...state,
 isRoomInputFocused: state.createRoomInputFocused,
});

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction()),
 focusOnCreateRoomInput: (bool) => dispatch(focusOnCreateRoomInput(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

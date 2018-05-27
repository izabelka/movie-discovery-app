import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  simpleAction,
  focusOnCreateRoomInput,
} from './stores/actionCreators'
class App extends Component {

  simpleAction = () => {
    this.props.simpleAction();
    this.props.focusOnCreateRoomInput(!this.props.isRoomInputFocused);
  }

  render() {
    return (
      <div className="App">

        {/* <button onClick={this.simpleAction}>Test redux action</button> */}
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

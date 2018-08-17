import React, { Component } from 'react';
import Login from './containers/Login'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default connect()(App)

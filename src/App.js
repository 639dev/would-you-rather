import React, { Component ,Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './containers/Login'
import Home from './containers/Home'
import Header from './components/Header' 
import Nav from './components/Nav'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'


import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
              <Route exact path="/" component={Home} />
              <Route  path='/login' component={Login} />
          </div>
        </Fragment>
      </Router>
    )
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(App)

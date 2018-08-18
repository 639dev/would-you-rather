import React, { Component ,Fragment} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './containers/Login'
import Home from './containers/Home'
import Header from './components/Header' 
import Nav from './components/Nav'
import AllQuestions from './containers/AllQuestions'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { users , authedUser } = this.props

    return (
      <Router>
          <div className="App">
          {this.props.authedUser !== null && (
            <Fragment>
            <Header users={users} authedUser={authedUser}/>
            <Nav />
            </Fragment>
          )}
          <Switch>
              <Route exact path="/" component={Home} />
              <Route  path='/login' component={Login} />
              <Route  path='/questions' component={AllQuestions} />
          </Switch>
          </div>
      </Router>
    )
  }
}


function mapStateToProps ({ authedUser,users }) {
  return {
    authedUser: authedUser,
    users: users
  }
}

export default connect(mapStateToProps)(App)

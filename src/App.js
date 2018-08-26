import React, { Component ,Fragment} from 'react';
import { BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import Login from './containers/Login'
import Home from './components/Home'
import Header from './containers/Header' 
import Nav from './components/Nav'
import PageNotFound from './components/404'
import Poll from './containers/Poll'
import LeaderBoard from './containers/LeaderBoard'
import AddQuestion from './containers/AddQuestion'
import AllQuestions from './containers/AllQuestions'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
          <div className="App">
           <LoadingBar />
            <Header/>
            <Switch>
                <Route  exact path="/" 
                render={props => (
                  this.props.authedUser
                    ? <Home  />
                    : <Redirect to="/login" />
                )} />
                <Route  path='/login' component={Login} />
                <Route  exact path='/questions' 
                render={props => (
                  this.props.authedUser
                    ? <AllQuestions  />
                    : <Redirect to="/login" />
                )} />
                <Route  path='/add' 
                render={props => (
                  this.props.authedUser
                    ? <AddQuestion  />
                    : <Redirect to="/login" />
                )} />
                <Route  path='/LeaderBoard' 
                render={props => (
                  this.props.authedUser
                    ? <LeaderBoard  />
                    : <Redirect to="/login" />
                )} />
                <Route  exact path='/questions/poll/:id' 
                render={props => (
                  this.props.authedUser
                    ? <Poll  {...props}/>
                    : <Redirect to="/login" />
                )} />
                <Route path="*" render={props => (
                  this.props.authedUser
                    ? <PageNotFound  {...props}/>
                    : <Redirect to="/login" />
                )} />
            </Switch>
          </div>
      </Router>
    )
  }
}



function mapStateToProps ({ authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)

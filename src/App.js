import React, { Component ,Fragment} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './containers/Login'
import Home from './components/Home'
import Header from './containers/Header' 
import Nav from './components/Nav'
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
                <Route  exact path="/" component={Home} />
                <Route  path='/login' component={Login} />
                <Route  exact path='/questions' component={AllQuestions} />
                <Route  path='/add' component={AddQuestion} />
                <Route  path='/LeaderBoard' component={LeaderBoard} />
                <Route  exact path='/questions/poll/:id' component={Poll} />
            </Switch>
          </div>
      </Router>
    )
  }
}




export default connect()(App)

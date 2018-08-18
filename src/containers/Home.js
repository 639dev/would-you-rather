import React from 'react'
import Header from '../components/Header' 
import Nav from '../components/Nav'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'



class Home extends React.Component {
	state = {
		answered: [],
		unanswered: [],
	}


	render() {	
		if (this.props.authedUser === null) {
	      return <Redirect to='/login' />
	    }
		return (
			<div>
				<Header user={this.props.user} />
			    <Nav/>
				<main>
					Main
				</main>
			</div>
		)
	}
}


function mapStateToProps ({ authedUser, users}) {
  return {
    authedUser: authedUser,
    user: _.values(users).filter((user) => user.id === authedUser.id)
  }
}

export default connect(mapStateToProps)(Home)
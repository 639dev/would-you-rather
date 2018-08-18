import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import '../assets/css/Home.css'



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
				<main>
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
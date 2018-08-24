import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AllQuestions from './AllQuestions'
import _ from 'lodash'
import '../assets/css/Home.css'



class Home extends React.Component {
	render() {	
		if (this.props.authedUser === null) {
	      return <Redirect to='/login' />
	    }
		return (
			<div>
				<AllQuestions />
			</div>
		)
	}
}

export default Home
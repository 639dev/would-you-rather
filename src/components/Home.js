import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AllQuestions from '../containers/AllQuestions'
import _ from 'lodash'
import '../assets/css/Home.css'



class Home extends React.Component {
	render() {	
		return (
			<div>
				<AllQuestions />
			</div>
		)
	}
}

export default Home
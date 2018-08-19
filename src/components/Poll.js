import React from 'react'
import QuestionCard from '../components/QuestionCard'
import '../assets/css/Poll.css'

const Poll = (props) => {
	console.log(props.match.params)
	return (
		<div className="container">
			<div className="scrollable">
				<h1> hello </h1>
			</div>
		</div>
	)
}


export default Poll
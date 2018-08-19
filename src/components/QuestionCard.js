import React from 'react'
import '../assets/css/AllQuestions.css' 
import { Card } from "@blueprintjs/core";
import { Link } from 'react-router-dom'
import _ from 'lodash'


const QuestionCard = (props) => {
	return (
		<Card className="card">
		    <h2><a href="#">{props.question.author} asks...</a></h2>
		    <div className="card-info">
		    	<div className="image-div">
		    		<img src={props.user.avatarURL} alt="user-img" className="card-img" />
		    	</div>
		    	<div className="q-div">
		    		<p> would you rather ... </p>
		    		<em>{props.question.optionOne.text} ...</em>
		    		<Link to={`/questions/poll/${props.question.id}`}>View Poll</Link>
		    	</div>
		    </div>
		</Card>	
	)
}


export default QuestionCard
import React from 'react'
import '../assets/css/AllQuestions.css' 
import { Card } from "@blueprintjs/core";
import { Link,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'


class QuestionCard extends React.Component {
	render() {
		return (
			<Card className="card">
			    <h2><a href="#">{this.props.question.author} asks...</a></h2>
			    <div className="card-info">
			    	<div className="image-div">
			    		<img src={this.props.user.avatarURL} alt="user-img" className="card-img" />
			    	</div>
			    	<div className="q-div">
			    		<p> would you rather ... </p>
			    		<em>{this.props.question.optionOne.text} ...</em>
			    		<Link to={`/questions/poll/${this.props.question.id}`}>View Poll</Link>
			    	</div>
			    </div>
			</Card>	
	)
	}
}


export default withRouter(connect()(QuestionCard))
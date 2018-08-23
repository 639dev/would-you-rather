import React from 'react'
import { connect } from 'react-redux'
import { Card } from "@blueprintjs/core";
import _ from 'lodash'
import '../assets/css/LeaderBoard.css'

const LeaderBoard = (props) => {
	return(
		props.allusers.map((user) => (
			<Card className="card" key={user.name}>
			    <h2><a href="">{user.name}</a></h2>
			    <div className="card-info custom-padding">
			    	<div className="image-div">
			    		<img src={user.avatar} alt="user-img" className="card-img" />
			    	</div>
			    	<div className="q-div align-left custom-margin">
			    		<p>Answered Questions: {user.answered} </p>
			    		<p>Created Questions: {user.questions} </p>
			    	</div>
			    	<div className="score-div">
			    		<p> {user.score} </p>
			    	</div>
			    </div>
			</Card>	
		))
	)
}


function mapStateToProps({ users }) {
	const allusers = _.values(users).map((user) => {
	  	const details = { 
	  		avatar: user.avatarURL,
	  		name: user.name,
	  		answered: Object.keys(users[user.id].answers).length,
	  		questions: user.questions.length,
	  	}
	  	const score = details.answered + details.questions
	  	details.score = score
	  	return details
	    })
	    .sort((user1, user2) => (
	      user2.score - user1.score
	    ))

    return {
      allusers,
    };
}

export default connect(mapStateToProps)(LeaderBoard);
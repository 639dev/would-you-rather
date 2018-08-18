import React from 'react'
import { connect } from 'react-redux'
import '../assets/css/AllQuestions.css' 
import {Tabs} from '../components/Tabs'
import {Tab} from '../components/Tab'
import { Button, Card, Elevation } from "@blueprintjs/core";
import score from '../assets/images/score.png';


class AllQuestions extends React.Component {

	render() {
		return (
			<div className="container">
				<Tabs>
				    <Tab title="Unanswered Questions" linkClassName={'link-class-0'} className="tab">
				        <Card className="card">
						    <h2><a href="#">Writer asks...</a></h2>
						    <div className="card-info">
						    	<div className="image-div">
						    		<img src={score} alt="user-img" className="card-img" />
						    	</div>
						    	<div className="q-div">
						    		<p> would you rather ... </p>

						    		<button> View Poll </button>
						    	</div>
						    </div>
						</Card>
				    </Tab>
				    <Tab title="Answered Questions" linkClassName={'link-class-1'} className="tab">
				       <h1>content 1</h1>
				    </Tab>
				</Tabs>
			</div>
		)
	}
}



function mapStateToProps ({ authedUser, users,questions}) {
  return {
    authedUser: authedUser,
    questions: questions
  }
}

export default connect(mapStateToProps)(AllQuestions)

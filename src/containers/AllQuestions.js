import React from 'react'
import { connect } from 'react-redux'
import '../assets/css/AllQuestions.css' 
import {Tabs} from '../components/Tabs'
import {Tab} from '../components/Tab'
import QuestionCard from '../components/QuestionCard'
import _ from 'lodash'

class AllQuestions extends React.Component {

	render() {
		return (
			<div className="container">
				<Tabs>
				    <Tab title="Unanswered Questions" linkClassName={'link-class-0'} className="tab">
					    <div className="scrollable">
						    { _.values(this.props.questions).map( (question) => {
						    	let user = _.values(this.props.users).filter((user) => user.id == question.author);
						        return (
						    		<QuestionCard user={user[0]} question={question}/>
						    	)
						    })}
					    </div>
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
    questions: questions,
    users: users
  }
}

export default connect(mapStateToProps)(AllQuestions)

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
			<Tabs>
			    <Tab title="Unanswered Questions" linkClassName={'link-class-0'} className="tab">
				    <div className="scrollable">
					    { this.props.Unanswered.map( (question) => {
					    	let user = _.values(this.props.users).filter((user) => user.id == question.author);
					        return (
					    		<QuestionCard user={user[0]} question={question} key={question.id} text="view Poll"/>
					    	)
					    })}
				    </div>
			    </Tab>
			    <Tab title="Answered Questions" linkClassName={'link-class-1'} className="tab">
			       <div className="scrollable">
					    { this.props.Answered.map( (question) => {
					    	let user = _.values(this.props.users).filter((user) => user.id == question.author);
					        return (
					    		<QuestionCard user={user[0]} question={question} key={question.id} text="view Poll Details"/>
					    	)
					    })}
				    </div>
			    </Tab>
			</Tabs>
		)
	}
}



function mapStateToProps ({ authedUser, users,questions}) {
  const user = _.values(users).filter((user) => user.id == authedUser.id )
  const Unanswered = _.values(questions).filter((question) => !user[0].answers.hasOwnProperty(question.id))
  const Answered = _.values(questions).filter((question) => user[0].answers.hasOwnProperty(question.id))
  return {
    authedUser,
    Unanswered,
    Answered,
    users
  }
}

export default connect(mapStateToProps)(AllQuestions)

import React from 'react'
import { connect } from 'react-redux'
import '../assets/css/AllQuestions.css' 
import {Tabs} from '../components/Tabs'
import {Tab} from '../components/Tab'
import QuestionCard from '../containers/QuestionCard'
import _ from 'lodash'

class AllQuestions extends React.Component {

	render() {
		const { users } = this.props
		return (
			<Tabs>
			    <Tab title="Unanswered Questions" linkClassName={'link-class-0'} className="tab" opened={true}>
				    <div className="scrollable">
					    { this.props.Unanswered.map( (question) => {
					    	let user = users[question.author]
					        return (
					    		<QuestionCard user={user} question={question} key={question.id} text="view Poll"/>
					    	)
					    })}
				    </div>
			    </Tab>
			    <Tab title="Answered Questions" linkClassName={'link-class-1'} className="tab">
			       <div className="scrollable">
					    { this.props.Answered.map( (question) => {
					    	let user = users[question.author]
					        return (
					    		<QuestionCard user={user} question={question} key={question.id} text="view Poll Details"/>
					    	)
					    })}
				    </div>
			    </Tab>
			</Tabs>
		)
	}
}



function mapStateToProps ({ authedUser, users,questions}) {
  const user = users[authedUser.id]
  const Unanswered = _.values(questions).filter((question) => !user.answers.hasOwnProperty(question.id))
  const Answered = _.values(questions).filter((question) => user.answers.hasOwnProperty(question.id))
  return {
    Unanswered,
    Answered,
    users
  }
}

export default connect(mapStateToProps)(AllQuestions)

import React from 'react'
import { connect } from 'react-redux'
import '../assets/css/AllQuestions.css' 
import {Tabs} from '../components/Tabs'
import {Tab} from '../components/Tab'


class AllQuestions extends React.Component {

	render() {
		return (
			<div className="container">
				<Tabs>
				    <Tab title="Unanswered Questions" linkClassName={'link-class-0'} className="tab">
				        <p>content 0</p>
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

import React from 'react'
import { connect } from 'react-redux'
import QuestionCard from '../components/QuestionCard'
import { handleSaveAnswer } from '../actions/questions' 
import '../assets/css/Poll.css'
import _ from 'lodash'


class Poll extends React.Component {
	constructor(props) {
	    super(props)
	    this.save_answer = this.save_answer.bind(this)
  	}

	save_answer(e) {
		e.preventDefault()
	    const { dispatch, question,users ,authedUser} = this.props
	    const user = _.values(users).filter((user) => user.id == authedUser.id);
	    const answer = e.target.id == 'opt1' ? question['optionOne'] : question['optionTwo']
	    dispatch(handleSaveAnswer(user[0].id,question.id,answer))
	}

	render() {
		const { question } = this.props

	    if (typeof question == 'undefined') {
	      return <p>This Question doesn't exist</p>
	    }

		return (
			<div className="container">
				<div className="scrollable">
				<h1>Would you Rather..</h1>
					<form onSubmit={this.save_answer} className="form">
						<div className="radio-div">
							<input type="radio" name="answer" id="opt1"/>
							<label htmlFor="opt1">{question.optionOne.text}</label>
						</div>
						<div className="radio-div">
							<input type="radio" name="answer" id="opt2"/>
							<label htmlFor="opt2">{question.optionTwo.text}</label>
						</div>
						<div>
							<button type="submit">Save Answer</button>
						</div>
					</form>
				</div>
			</div>
		)
	}	
}



function mapStateToProps ({ authedUser, users,questions}, props) {
  const { id } = props.match.params
  const question1 = _.values(questions).filter((question) => question.id == id)
  
  return {
  	id,
  	authedUser,
  	question: question1[0],
  	users: users
  }
}

export default connect(mapStateToProps)(Poll)
import React from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions' 
import { handleSaveUserAnswer } from '../actions/users'
import { Card } from "@blueprintjs/core";
import '../assets/css/Poll.css'


class Poll extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = {selectedOption: 'optionOne'}
	    this.save_answer = this.save_answer.bind(this)
	    this.handleOptionChange = this.handleOptionChange.bind(this)
  	}

	save_answer(e) {
		e.preventDefault()
	    const { dispatch, question,user } = this.props
	    const answer = this.state.selectedOption
	    dispatch(handleSaveAnswer(user.id,question.id,answer))
	    dispatch(handleSaveUserAnswer(user.id,question.id,answer))
	}

	handleOptionChange(e){
	  this.setState({
	    selectedOption: e.target.value
	  });
	}

	render() {
		const { question,user,has_answered} = this.props

	    if (has_answered) {
	    	return (
			<Card className="card">
			    <h2><a href="">{question.author} asks...</a></h2>
			    <div className="card-info">
			    	<div className="image-div">
			    		<img src={user.avatarURL} alt="user-img" className="card-img" />
			    	</div>
			    	<div className="q-div align-left">
			    		<div className="option">
							<label htmlFor="opt1">{question.optionOne.text}</label>
						</div>
						<div className="bp3-progress-bar bp3-no-animation bp3-no-stripes">
							  <div className="bp3-progress-meter" style={{width: this.props.opt1votes+'%'}}></div>
						</div>
						<div className="option">
							<label htmlFor="opt2">{question.optionTwo.text}</label>
						</div>
						<div className="bp3-progress-bar bp3-no-animation bp3-no-stripes">
							<div className="bp3-progress-meter" style={{width: this.props.opt2votes+'%'}}></div>
					    </div>
			    	</div>
			    </div>
			</Card>	

		)
	    }
		return (
			<Card className="card">
			    <h2><a href="">{question.author} asks...</a></h2>
			    <div className="card-info">
			    	<div className="image-div">
			    		<img src={user.avatarURL} alt="user-img" className="card-img" />
			    	</div>
			    	<div className="q-div">
			    		<form onSubmit={this.save_answer} className="form">
			    			<div className="radio-div">
								<input type="radio" name="answer" value="optionOne" onChange={this.handleOptionChange} checked={true}/>
								<label htmlFor="opt1">{question.optionOne.text}</label>
							</div>
							<div className="radio-div">
								<input type="radio" name="answer" value="optionTwo" onChange={this.handleOptionChange}/>
								<label htmlFor="opt2">{question.optionTwo.text}</label>
							</div>
							<button type="submit">Save Answer</button>
					   </form>
			    	</div>
			    </div>
			</Card>		
		)
	}	
}



function mapStateToProps ({ authedUser, users,questions}, props) {
  const { id }  = props.match.params
  const user 	= users[authedUser.id]
  const question = questions[id];
  const has_answered = user.answers.hasOwnProperty(question.id)
  let opt1votes = question.optionOne.votes.length
  let opt2votes = question.optionTwo.votes.length
  const totalVotes = opt1votes + opt2votes
  if (totalVotes !== 0) {
  	opt1votes =  ((opt1votes/totalVotes) * 100).toFixed(2)
  	opt2votes =  ((opt2votes/totalVotes) * 100).toFixed(2)
  }
  return {
  	id,
  	user,
  	has_answered,
  	opt1votes,
  	opt2votes,
  	question,
  }
}

export default connect(mapStateToProps)(Poll)
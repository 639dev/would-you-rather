import React from 'react'
import { Card } from "@blueprintjs/core";
import _ from 'lodash'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';
import '../assets/css/AddQuestion.css'



class AddQuestion extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = {
	        optionOneText: '',
	    	optionTwoText: '',
	    }
	    this.save_question= this.save_question.bind(this)
  	}

  	save_question(e) {
  		e.preventDefault()
  		const { optionOneText, optionTwoText } = this.state
  		const { dispatch ,authuser} = this.props;
  		if( optionOneText && optionTwoText ) {
  			const authedUser = authuser.id
  			dispatch(handleAddQuestion({authedUser,optionOneText, optionTwoText}));
  		}
  	}

  	render() {
  		return (
	  		<Card className="card">
			    <h2><a href="">Would you rather...</a></h2>
			    <div className="card-info custom-height">
			    	<div className="image-div">
			    		<img src={this.props.authuser.avatarURL} alt="user-img" className="card-img" />
			    	</div>
			    	<div className="q-div">
			    		<form onSubmit={this.save_question} className="form">
			    			<div className="input-div">
			    				<label htmlFor="opt1">Option One</label>
								<input type="text" name="answer" id="opt1" value={this.state.optionOneText} onChange={(e) => this.setState({optionOneText:e.target.value})}/>
							</div>
							<div className="input-div">
								<label htmlFor="opt2">Option Two</label>
								<input type="text" name="answer" id="opt2" value={this.state.optionTwoText} onChange={(e) => this.setState({optionTwoText:e.target.value})}/>
							</div>
							<button type="submit">Save Answer</button>
					   </form>
			    	</div>
			    </div>
			</Card>	
		)
	}
}


function mapStateToProps ({ authedUser, users}) {
  const user = _.values(users).filter((user) => user.id == authedUser.id )
  const authuser = user[0]
  return {
  	authuser
  }
}

export default connect(mapStateToProps)(AddQuestion)
import React from 'react'
import { connect } from 'react-redux'


class AllQuestions extends React.Component {
	render() {
		console.log(this.props.questions)
		return (
			<h6>jhhh</h6>
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

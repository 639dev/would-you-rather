import React, { Component } from 'react'
import user_ from '../assets/images/user1.svg';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import '../assets/css/Login.css'
import _ from 'lodash'


class Login extends Component {
	constructor(props) {
	    super(props);
	    this.state = {authedUser: null,picked:false};
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleSubmit = async event => {
	  event.preventDefault();
	  const { dispatch } = this.props
	  try {
	    await dispatch(setAuthedUser({
		      id: this.state.authedUser
		    }))
	    this.props.history.push("/");
	  } catch (e) {
	    alert(e.message);
	  }
	} //https://serverless-stack.com/chapters/redirect-on-login-and-logout.html

	render() {
		const {users} = this.props
	
		return (
			<div className="Login">
		      <h1 className="Login__name">Would you Rather!</h1>
		      <img src={user_} alt="user-img" className="Login__img" height="150"/>
				<form onSubmit={this.handleSubmit}>
		      		<div className="bp3-select bp3-large">
					  <select defaultValue="null" value={this.state.value} className="bp3-select select" onChange={(event) => this.setState({authedUser: event.target.value,picked: true})}>
						  <option disabled value="null">Choose user to login</option>
						  {_.values(users).map((user) => {
						  	return <option key={user.id} value={user.id}>{user.name}</option>
						  })}
					  </select>
					</div>
				</form>
				<button className="Login__btn" onClick={this.handleSubmit}>Sign in</button>
		      <p className="Login__info"> </p>
		    </div>
	    )
	}
}

function mapStateToProps ({ users }) {
  return {
    users: users
  }
}


export default connect(mapStateToProps)(Login)
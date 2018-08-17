import React, { Component } from 'react'
import user_ from '../assets/images/user.svg';
import { connect } from 'react-redux'
import '../assets/css/Login.css'
import _ from 'lodash'


class Login extends Component {
	componentDidMount() {
	}
	render() {
		const {users} = this.props
		return (
			<div className="Login">
		      <h1 className="Login__name">Would you Rather!</h1>
		      <img src={user_} alt="user-img" className="Login__img" height="150"/>
	
		      		<div className="bp3-select bp3-large">
					  <select className="bp3-select select">
						  <option selected disabled>Choose user to login</option>
						  {_.values(users).map((user) => {
						  	return <option key={user.id}>{user.name}</option>
						  })}
					  </select>
					</div>

		      <button className="Login__btn">Sign in</button>
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
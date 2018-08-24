import React from 'react'
import '../assets/css/Header.css'
import { connect } from 'react-redux'
import { Redirect,NavLink,withRouter } from 'react-router-dom'
import { logOut } from '../actions/authedUser'
import _ from 'lodash'



class Header extends React.Component {
	constructor(props) {
		super(props)
		this.handleLogout = this.handleLogout.bind(this)
	}

	handleLogout = async event => {
	  this.props.dispatch(logOut())
	  this.props.history.push("/login");
	}

	render() {
		const {users} = this.props
		const authedUser = _.values(this.props.authedUser)
		const user = _.values(users).find(function (obj) { return obj.id == authedUser })
		return (
			<div className="header-div">
				<header className="site-header">
				  
				  <nav className="site-nav">
				    <ul>
				      <li><NavLink exact activeClassName="active"  to="/">Home</NavLink></li>
					  <li><NavLink exact activeClassName="active"  to="/add">Add Question</NavLink></li>
					  <li><NavLink exact activeClassName="active"  to="/LeaderBoard">Leader Board</NavLink></li>
				    </ul>
				  </nav>
				 
				  <div className="actions"> 
				    {this.props.authedUser !== null && (
				  		<p className="user-greeting">Hello {user.id} </p>
				  	)}
				    <button onClick={this.handleLogout} className="sign-out-link">Sign Out</button>
				  </div>
				</header>
			</div>
		)
	}
}


function mapStateToProps ({ authedUser,users }) {
  return {
    authedUser: authedUser,
    users: users
  }
}

export default withRouter(connect(mapStateToProps)(Header))

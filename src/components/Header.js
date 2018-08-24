import React from 'react'
import '../assets/css/Header.css'
import { connect } from 'react-redux'
import { Redirect,NavLink } from 'react-router-dom'
import _ from 'lodash'



class Header extends React.Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout () {
		console.log('ss')
		return <Redirect to='/login'/>
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
				    <a href="#0" className="sign-out-link">Sign Out</a>
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

export default connect(mapStateToProps)(Header)



		// <header className="App-header">
		// 		<div className="header-text">
		// 			<h1> Would you Rather!</h1>
		// 		</div>
		// 		<div className="user-info">	
		// 			<h2 className="user-greeting"> Hello {user.id}</h2>
		// 			<img src={user.avatarURL} alt="user-img" className="user-img" height="50"/>
		// 			<a onClick={this.logout}><img src={'https://img.icons8.com/color/logout/100'} alt="user-img" className="logout-img" height="50"/></a>  
		// 		</div>
		// 	</header>

import React from 'react'
import '../assets/css/Header.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
			<header className="App-header">
				<div className="header-text">
					<h1> Would you Rather!</h1>
				</div>
				<div className="user-info">	
					<h2 className="user-greeting"> Hello {user.id}</h2>
					<img src={user.avatarURL} alt="user-img" className="user-img" height="100"/>
					<a onClick={this.logout}><img src={'https://img.icons8.com/color/logout/100'} alt="user-img" className="logout-img" height="100" /></a>  
				</div>
			</header>
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

import React from 'react'
import '../assets/css/Header.css'
import { connect } from 'react-redux'
import _ from 'lodash'



class Header extends React.Component {
	
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
					<img src={user.avatarURL} alt="user-img" className="user-img" />
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

import React from 'react'
import '../assets/css/Header.css'

const Nav = (props) => {
	console.log(props)
	return (
		<header className="App-header">
			<div className="header-text">
				<h1> Would you Rather!</h1>
			</div>
			<div className="user-info">
				<h2 className="user-greeting"> Hello {props.user[0].id}</h2>
				<img src={props.user[0].avatarURL} alt="user-img" className="user-img" />
			</div>
		</header>
	)
}


export default Nav
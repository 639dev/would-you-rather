import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Nav.css'

const Nav = () => {
	return (
		<ul className="navigator">
			<NavLink exact activeClassName="active1" className="home" to="/"><li></li></NavLink>
			<NavLink exact activeClassName="active1" className="add" to="/x"><li></li></NavLink>
			<NavLink exact activeClassName="active1" className="score" to="/y"><li></li></NavLink>
		</ul>
	)
}



export default Nav
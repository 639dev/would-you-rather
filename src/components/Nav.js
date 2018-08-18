import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Nav.css'

const Nav = () => {
	return (
		<ul>
			<Link className="home" to="/questions"><li></li></Link>
			<Link className="add" to="/"><li></li></Link>
			<Link className="score" to="/"><li></li></Link>
		</ul>
	)
}



export default Nav
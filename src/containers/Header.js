import React , {Fragment} from 'react'
import '../assets/css/Header.css'
import { connect } from 'react-redux'
import { NavLink,withRouter } from 'react-router-dom'
import { logOut } from '../actions/authedUser'



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
		return (
			<div className="header-div">
				<header className="site-header">
				  {this.props.authedUser !== null ? (
				  	<Fragment>
						  <nav className="site-nav">
						    <ul>
						      <li><NavLink exact activeClassName="active"  to="/">Home</NavLink></li>
							  <li><NavLink exact activeClassName="active"  to="/add">Add Question</NavLink></li>
							  <li><NavLink exact activeClassName="active"  to="/LeaderBoard">Leader Board</NavLink></li>
						    </ul>
						  </nav>
						 
						  <div className="actions"> 
						    	<Fragment>
						  			<p className="user-greeting">Hello {this.props.authedUser.id} </p>
						    		<button onClick={this.handleLogout} className="sign-out-link">Sign Out</button>
						    	</Fragment>
						  </div>
				    </Fragment>
				 ): 
				  <h2>React App</h2>
				}
				</header>
			</div>
		)
	}
}


function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(Header))

import React from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';

function Nav() {
	return (
		<div className='nav-component'>
			{/* Nav */}
			<div className='wrapper'>
				<nav id='menu'>
					logo/link
					<div className='menu-links'>
						<NavLink exact to="/" activeClassName='active' >Home</NavLink>
						<NavLink exact to="/guide" activeClassName='active' >Guide</NavLink>
						<NavLink exact to="/build" activeClassName='active' >Build</NavLink>
						<NavLink exact to="/saved" activeClassName='active' >Saved Decks</NavLink>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Nav;
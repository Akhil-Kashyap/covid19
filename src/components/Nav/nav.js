import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
	render() {
		return (
			<header className="header">
				<a href="" rel="noopener noreferrer" className="logo">
					COVID-19
				</a>
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon" htmlFor="menu-btn">
					<span className="navicon" />
				</label>
				<ul className="menu">
					<li>
						<NavLink exact to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/news/">News</NavLink>
					</li>
					<li>
						<NavLink to="/statistics/">Statistics</NavLink>
					</li>
				</ul>
			</header>
		);
	}
}
export default Nav;

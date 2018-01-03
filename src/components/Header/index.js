import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="App-header clearfix">
        <NavLink to="/"><img className="logo pull-start navbar-brand" src="original-favicon.png" alt="Logo" /></NavLink>
        <nav className="info-nav pull-start">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About the Summit</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
          </ul>
        </nav>
        <nav className="action-nav pull-end">
          <ul>
            <li><NavLink to="/login" className="btn btn-default navbar-btn">Log In</NavLink></li>
            <li><NavLink to="/signup" className="btn btn-default navbar-btn">Sign Up</NavLink></li>
          </ul>
        </nav>
      </div>
      );
  }
}

export default Header;
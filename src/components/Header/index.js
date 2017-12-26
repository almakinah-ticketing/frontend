import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="App-header clearfix">
        <img className="logo pull-start" src="logo.png" alt="Logo" />
        <nav className="info-nav pull-start">
          <ul>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/about">About the Summit</NavLink></li>
          </ul>
        </nav>
        <nav className="action-nav pull-end">
          <ul>
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
        </nav>
      </div>
      );
  }
}

export default Header;
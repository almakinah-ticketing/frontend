import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { SearchForm } from '../../containers/EventsList';

class Header extends Component {
  constructor(props) {
    super(props);
    this._unauthenticatedAdvancedNav = this._unauthenticatedAdvancedNav.bind(this);
    this._attendeeAdvancedNav = this._attendeeAdvancedNav.bind(this);
    this._adminAdvancedNav = this._adminAdvancedNav.bind(this);
  }

  _unauthenticatedAdvancedNav() {
    return(
      <nav className="advanced-nav pull-end">
          <ul>
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
      </nav>
      );
  }

  _attendeeAdvancedNav() {
    const { currentUser, logout } = this.props;
    return(
      <nav className="advanced-nav pull-end">
        <p>Logged in as: {currentUser.f_name} {currentUser.l_name}</p>
        <button onClick={() => {logout('attendees')}} className="btn btn-link">Log Out</button>
        <ul>
          <li><NavLink to="/calendar">Calendar</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
          <li><NavLink to="/history">History</NavLink></li>
        </ul>
      </nav>
      );
  }

  _adminAdvancedNav() {
    const { currentUser, logout } = this.props;
    return(
      <nav className="advanced-nav pull-end">
        <p>Logged in as: {currentUser.f_name} {currentUser.l_name}</p>
        <button onClick={() => {logout('admins')}} className="btn btn-link">Log Out</button>
        <ul>
          <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/admin/create">Create Event</NavLink></li>
          <li><NavLink to="/admin/invite">Invite Admin</NavLink></li>
        </ul>
      </nav>
      );
  }

  render() {
    const { isAuthenticated, currentUser, getEvents } = this.props;
    return(
      <div className="App-header clearfix">
        <h1 className="logo navbar-brand pull-start"><NavLink to="/"><img src="original-favicon.png" alt="Logo" /></NavLink></h1>
        <nav className="basic-nav pull-start">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About the Summit</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
          </ul>
        </nav>
        <SearchForm />
        {
          (isAuthenticated && currentUser)
          ? (currentUser.attendee_id)
            ? this._attendeeAdvancedNav()
            : (currentUser.admin_id)
              ? this._adminAdvancedNav()
              : null
          : this._unauthenticatedAdvancedNav()
        }
      </div>
      );
  }
}

export default Header;
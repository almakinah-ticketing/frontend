import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
import { withLastLocation } from 'react-router-last-location';

class LogIn extends Component {
  constructor(props) {
    super(props);
    props = this.props;
    if (history.location.state) {
      this.state = {
        email: history.location.state.email,
        password: ''
      }
    } else {
      this.state = {
        email: '',
        password: ''
      }
    }
    this._handleChange = this._handleChange.bind(this);
    this._submitLoginData = this._submitLoginData.bind(this);
  }

  _handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value});
  }

  _submitLoginData(event) {
    event.preventDefault();
    const { login, lastLocation } = this.props;
    login('attendees', this.state, lastLocation);
    this.setState({
      password: ''
    });
  }

  componentWillMount() {
    const { isAuthenticated, currentUser, lastLocation, loginLoading, handleNewSearchInput } = this.props;
    if (currentUser.admin_id) {
      if (lastLocation && lastLocation.pathname !== '/login' && lastLocation.pathname !== '/admin/login') {
        history.replace(lastLocation.pathname);
      } else {
        history.push('/admin/dashboard');
      }
    } else if (currentUser.attendee_id) {
      if (lastLocation && lastLocation.pathname !== '/login' && lastLocation.pathname !== '/admin/login') {
        history.replace(lastLocation.pathname);
      } else {
        history.push('/calendar');
      }
    }
    if (!isAuthenticated && lastLocation && lastLocation.pathname === '/signup') {
      loginLoading();
    }
    handleNewSearchInput('');
    // if (isAuthenticated) {
    //   if (lastLocation && lastLocation.pathname !== '/admin/login' && lastLocation.pathname !== '/login') {
    //     history.replace(lastLocation.pathname);
    //   } else {
    //     if (currentUser.attendee_id) {
    //       history.push('/calendar');
    //     } else if (currentUser.admin_id) {
    //       history.push('/admin/dashboard');
    //     }
    //   }
    // }
  }

  render() {
    const {error, lastLocation} = this.props;
    return(
      <div className="login">
      {
        (error)
          ? <p className="error-messages alert alert-danger">{error}</p>
          : (history.location.state)
            ? <p className="success-messages alert alert-success">Account created successfully. Log in below.</p>
            : null
      }
        <form className="attendee-login-form" onSubmit={this._submitLoginData}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={this.state.email} required onChange={this._handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={this.state.password} required onChange={this._handleChange} />
          </div>
          <button type="submit" class="btn btn-primary">Log in</button>
        </form>
        <Link to="/signup">Don't have an account? Sign up.</Link>
        <Link to="/admin/login" className="login-as-admin">Log in as admin.</Link>
      </div>
      );
  }
}

export default withLastLocation(LogIn);
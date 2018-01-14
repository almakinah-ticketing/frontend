import React, { Component } from 'react';
import history from '../../history';
import { withLastLocation } from 'react-router-last-location';
import '../LogIn/LogIn.css';

class LogInAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this._handleChange = this._handleChange.bind(this);
    this._submitLoginData = this._submitLoginData.bind(this);
  }

  _handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value});
  }

  _submitLoginData(event) {
    event.preventDefault();
    const {login, lastLocation} = this.props;
    login('admins', this.state, lastLocation);
    this.setState({
      password: ''
    });
  }

  componentWillMount() {
    const { isAuthenticated, currentUser, lastLocation, handleNewSearchInput, loginLoading } = this.props;
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
    if (!isAuthenticated && lastLocation && (lastLocation.pathname === '/signup' || lastLocation.pathname === '/login')) {
      loginLoading();
    }
    handleNewSearchInput('');
  }

  render() {
    const {error} = this.props;
    return(
      <div className="login-admin login page">
        <h2>Log in as admin</h2>
      {
          (error)
          ? <p className="error-messages alert alert-danger">{error}</p>
          : null
        }
        <form className="attendee-login-form" onSubmit={this._submitLoginData}>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Email address" value={this.state.email} required onChange={this._handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={this.state.password} required onChange={this._handleChange} />
          </div>
          <button type="submit" class="btn btn-primary">Log in as admin</button>
        </form>
      </div>
      );
  }
}

export default withLastLocation(LogInAdmin);
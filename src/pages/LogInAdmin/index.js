import React, { Component } from 'react';
import history from '../../history';
import { withLastLocation } from 'react-router-last-location';

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
    const { currentUser, lastLocation } = this.props;
    if (currentUser.admin_id) {
      if (lastLocation && lastLocation.pathname !== '/login' && lastLocation.pathname !== '/admin/login') {
        history.replace(lastLocation.pathname);
      } else {
        if (currentUser.attendee_id) {
          history.push('/calendar');
        } else if (currentUser.admin_id) {
          history.push('/admin/dashboard');
        }
      }
    }
  }

  render() {
    const {error} = this.props;
    return(
      <div className="login">
      {
          (error)
          ? <p className="error-messages alert alert-danger">{error}</p>
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
          <button type="submit" class="btn btn-primary">Log in as admin</button>
        </form>
      </div>
      );
  }
}

export default withLastLocation(LogInAdmin);
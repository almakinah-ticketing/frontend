import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import history from '../../history';

class LogIn extends Component {
  constructor(props) {
    super(props);
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
  }

  _handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value});
  }

  render() {
    return(
      <div className="login">
        <form className="attendee-login-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={this.state.email} required pattern="\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i" onChange={this._handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={this.state.password} required minLength="8" maxLength="72" pattern="(\w*[-\/\\^$*+?!&.()|[\]{}]*){3,}" onChange={this._handleChange} />
          </div>
          <button type="submit" class="btn btn-primary">Log In</button>
        </form>
        <Link to="/admin/login" className="login-as-admin">Log In as Admin</Link>
      </div>
      );
  }
}

export default LogIn;
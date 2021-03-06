import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      f_name: '',
      l_name: '',
      phone_number: ''
    }
    this._handleChange = this._handleChange.bind(this);
    this._submitNewAttendee = this._submitNewAttendee.bind(this);
  }

  _handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value});
  }

  _submitNewAttendee(event) {
    event.preventDefault();
    const {postNewAttendee} = this.props;
    var attendee = {
      attendee: this.state
    };
    postNewAttendee(attendee);
    this.setState({
      password: '',
      password_confirmation: ''
    });
  }

  componentWillMount() {
    const { isAuthenticated, currentUser, lastLocation, postNewAttendeeLoading, handleNewSearchInput } = this.props;
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
    postNewAttendeeLoading();
    handleNewSearchInput('');
  }
  
  render() {
    const {error} = this.props;
    return(
      <div className="signup page">
        <h2>Create a new account</h2>
        {
          (error)
          ? <p className="error-messages alert alert-danger">{error}</p>
          : null
        }
        <form className="signup-form" onSubmit={this._submitNewAttendee}>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={this.state.email} aria-describedby="emailHelp" placeholder="Email address" required pattern='^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i' onChange={this._handleChange} />
            <small id="emailHelp" className="form-text text-muted">Your email is what you'll use to log in and receive notifications.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={this.state.password} aria-describedby="passwordHelp" placeholder="Password" required minLength="8" maxLength="72" onChange={this._handleChange} />
            <small id="passwordHelp" className="form-text text-muted">Your password should be between 8 and 72 characters.</small>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="sr-only">Confirm password</label>
            <input type="password" className="form-control" id="confirm-password" name="password_confirmation" value={this.state.password_confirmation} aria-describedby="confirmPasswordHelp" placeholder="Confirm password" required minLength="8" maxLength="72" pattern="(\w*[-\/\\^$*+?!&.()|[\]{}]*){3,}" onChange={this._handleChange} />
            <small id="confirmPasswordHelp" className="form-text text-muted">Type in your password again just to be safe!</small>
          </div>
          <div className="form-group">
            <label htmlFor="first-name" className="sr-only">First name</label>
            <input type="text" className="form-control" id="first-name" name="f_name" value={this.state.f_name} aria-describedby="firstNameHelp" placeholder="First name" required minLength="1" maximum="20" pattern="[A-Z]+\w*" onChange={this._handleChange} />
            <small id="firstNameHelp" className="form-text text-muted">Your first name should start with a capital letter.</small>
          </div>
          <div className="form-group">
            <label htmlFor="last-name" className="sr-only">Last name</label>
            <input type="text" className="form-control" id="last-name" name="l_name" value={this.state.l_name} aria-describedby="lastNameHelp" placeholder="Last name" required minLength="1" maximum="20" pattern="[A-Z]+\w*" onChange={this._handleChange} />
            <small id="lastNameHelp" className="form-text text-muted">Your last name should start with a capital letter.</small>
          </div>
          <div className="form-group">
            <label htmlFor="phone-number" className="sr-only">Phone number</label>
            <input type="text" className="form-control" id="phone-number" name="phone_number" value={this.state.phone_number} aria-describedby="phoneNumberHelp" placeholder="Phone number" required minLength="9" maximum="11" pattern="\d*" onChange={this._handleChange}/>
            <small id="phoneNumberHelp" className="form-text text-muted">Please enter a valid mobile phone or landline number in case we need to contact you about important updates.</small>
          </div>
          <button className="btn btn-primary">Sign up</button>
        </form>
        <Link to="/login">Already have an account? Log in.</Link>
      </div>
      );
  }
}

export default SignUp;
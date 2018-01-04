import React, {Component} from 'react';
import './SignUp.css';
import history from '../../history';

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
    const {postNewAttendee, error} = this.props;
    var attendee = {
      attendee: this.state
    };
    postNewAttendee(attendee);
    this.setState({
      password: '',
      password_confirmation: ''
    })
    if (!error) {
      history.push('/login', {email: this.state.email});
    }
  }
  
  render() {
    const {error} = this.props;
    return(
      <div className="SignUp">
        {
          (error)
          ? <p className="error-messages alert alert-danger">{error}</p>
          : null
        }
        <form className="sign-up-form" onSubmit={this._submitNewAttendee}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={this.state.email} aria-describedby="emailHelp" placeholder="hermionegranger@hogwarts.edu" required pattern='^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i' onChange={this._handleChange} />
            <small id="emailHelp" className="form-text text-muted">Your email is what you'll use to log in and receive notifications.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={this.state.password} aria-describedby="passwordHelp" required minLength="8" maxLength="72" onChange={this._handleChange} />
            <small id="passwordHelp" className="form-text text-muted">Your password should be between 8 and 72 characters.</small>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm password</label>
            <input type="password" className="form-control" id="confirm-password" name="password_confirmation" value={this.state.password_confirmation} aria-describedby="confirmPasswordHelp" required minLength="8" maxLength="72" pattern="(\w*[-\/\\^$*+?!&.()|[\]{}]*){3,}" onChange={this._handleChange} />
            <small id="confirmPasswordHelp" className="form-text text-muted">Type in your password again just to be safe!</small>
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First name</label>
            <input type="text" className="form-control" id="first-name" name="f_name" value={this.state.f_name} aria-describedby="firstNameHelp" placeholder="Hermione" required minLength="1" maximum="20" pattern="[A-Z]+\w*" onChange={this._handleChange} />
            <small id="firstNameHelp" className="form-text text-muted">Your first name should start with a capital letter.</small>
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last name</label>
            <input type="text" className="form-control" id="last-name" name="l_name" value={this.state.l_name} aria-describedby="lastNameHelp" placeholder="Granger" required minLength="1" maximum="20" pattern="[A-Z]+\w*" onChange={this._handleChange} />
            <small id="lastNameHelp" className="form-text text-muted">Your last name should start with a capital letter.</small>
          </div>
          <div className="form-group">
            <label htmlFor="phone-number">Phone number</label>
            <input type="text" className="form-control" id="phone-number" name="phone_number" value={this.state.phone_number} aria-describedby="phoneNumberHelp" required minLength="9" maximum="11" pattern="\d*" onChange={this._handleChange}/>
            <small id="phoneNumberHelp" className="form-text text-muted">Please enter a valid mobile phone or landline number in case event organizers need to contact you.</small>
          </div>
          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      );
  }
}

export default SignUp;
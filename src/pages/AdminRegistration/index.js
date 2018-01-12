import React, {Component} from 'react';
import history from '../../history';

export default class AdminRegistration extends Component {
	constructor(){
	  super();
    this.state = {
    	f_name:"",
    	l_name:"",
    	phone_number:"",
    	password:"",
    	password_confirmation:"",
    }  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);   
  }

  handleChange(event) {
 	 this.setState({[event.target.name]: event.target.value});
 	} 

	 handleSubmit(event) {
  	const {admin, updateAdmin} = this.props;
    event.preventDefault();
    updateAdmin(admin.id, this.state);
  }

  componentWillMount() {
    const {
      getAdmin
    } = this.props;
    const params = new URLSearchParams(this.props.location.search);
    const invitationToken = params.get('invitation_token');
    getAdmin(invitationToken);
  }

  render(){
  	const {error, admin} = this.props;
  	console.log(this.props);
  	
  	return(
  		<div>
  			<h1>Admin Registration</h1>
  			 {
        	error ? <div>{error[0]}</div> : null
        	
        }

        
  			<form className="form-horizontal" onSubmit={this.handleSubmit}>
	  			<div className="form-group">
	  				<label htmlFor="f_name">First Name</label>
	  				<input type="text" id="f_name" name="f_name" value={this.state.f_name} onChange={this.handleChange}/>
	  				<small id="firstNameHelp" className="form-text text-muted">Your first name should start with a capital letter.</small>
	  			</div>
	  			<div className="form-group">
	  				<label htmlFor="l_name">Last Name</label>
	  				<input type="text" id="l_name" name="l_name" value={this.state.l_name} onChange={this.handleChange}/>		
	  				<small id="lastNameHelp" className="form-text text-muted">Your last name should start with a capital letter.</small>
	  			</div>
	  			<div className="form-group">
	  				<label htmlFor="phone_number">Phone Number</label>
	  				<input type="tel" id="phone_number" name="phone_number" value={this.state.phone_number} onChange={this.handleChange}/>		
	  				<small id="phoneNumberHelp" className="form-text text-muted">Please enter a valid mobile phone or landline number in case event organizers need to contact you.</small>
	  			</div>
	  			<div className="form-group">
	  				<label htmlFor="email">Email</label>
	  				<input type="email" id="email" name="email" value={admin.email} disabled/>
	  			</div>
	  			<div className="form-group">
	  				<label htmlFor="password">Password</label>
	  				<input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>	
	  				<small id="passwordHelp" className="form-text text-muted">Your password should be between 8 and 72 characters.</small>
	  			</div>
	  			<div className="form-group">
	  				<label htmlFor="password_confirmation">Password Confirmation</label>
	  				<input type="password" id="password_confirmation" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange}/>		
	  				<small id="confirmPasswordHelp" className="form-text text-muted">Type in your password again just to be safe!</small>
	  			</div>

	  			<button className="btn btn-primary" type="submit">Submit</button>
	  			
  			</form>
  		</div>

  	)
  }

}
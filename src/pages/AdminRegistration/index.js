import React, {Component} from 'react';
import history from '../../history';
import './AdminRegistration.css';

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
  		<div className="admin-registration-form">
  			<h2>Complete your admin registration</h2>
  			 {
                      // (error) 
                     //    ? <div>{error}</div> 
                     //    : null
                    }
        
  			<form className="form-horizontal" onSubmit={this.handleSubmit}>
	  			<div className="form-group  group-with-small">
	  				<label htmlFor="email" className="sr-only">Email address</label>
	  				<input type="email" id="email" name="email" className="form-control" placeholder="Email address" value={admin.email} disabled/>
	  			</div>
	  			<div className="form-group group-with-small">
	  				<label htmlFor="password" className="sr-only">Password</label>
	  				<input type="password" id="password" name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>	
	  				<small id="passwordHelp" className="form-text text-muted">Your password should be between 8 and 72 characters.</small>
	  			</div>
	  			<div className="form-group group-with-small">
	  				<label htmlFor="password_confirmation" className="sr-only">Password confirmation</label>
	  				<input type="password" id="password_confirmation" name="password_confirmation" className="form-control" placeholder="Password confirmation" value={this.state.password_confirmation} onChange={this.handleChange}/>		
	  				<small id="confirmPasswordHelp" className="form-text text-muted">Type in your password again just to be safe!</small>
	  			</div>
                          <div className="form-group group-with-small">
                            <label htmlFor="f_name" className="sr-only">First name</label>
                            <input type="text" id="f_name" name="f_name" className="form-control" placeholder="First name" value={this.state.f_name} onChange={this.handleChange}/>
                            <small id="firstNameHelp" className="form-text text-muted">Your first name should start with a capital letter.</small>
                          </div>
                          <div className="form-group group-with-small">
                            <label htmlFor="l_name" className="sr-only">Last Name</label>
                            <input type="text" id="l_name" name="l_name" className="form-control" placeholder="Last name" value={this.state.l_name} onChange={this.handleChange}/>   
                            <small id="lastNameHelp" className="form-text text-muted">Your last name should start with a capital letter.</small>
                          </div>
                          <div className="form-group group-with-small">
                            <label htmlFor="phone_number" className="sr-only">Phone Number</label>
                            <input type="tel" id="phone_number" name="phone_number" className="form-control" placeholder="Phone number" value={this.state.phone_number} onChange={this.handleChange}/>    
                            <small id="phoneNumberHelp" className="form-text text-muted">Please enter a valid mobile phone or landline number in case event organizers need to contact you.</small>
                          </div>
	  			<button className="btn btn-primary" type="submit">Submit</button>
	  			
  			</form>
  		</div>

  	)
  }

}
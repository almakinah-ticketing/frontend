import React, {Component} from 'react';


class InviteAdminForm extends Component {

	constructor(){
	  super();
    this.state = {
    	email:"",
     	message:""
    }     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(event) {
 	 this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
  	const {postNewAdmin} = this.props;
    event.preventDefault();

    postNewAdmin(this.state);

  }

  render() {
  	const {error} = this.props;

    return(
      <div className="admin-dashboard">
        <h2>InviteAdminForm</h2>

        {
        	error ? <div>{error[0]}</div> : null
        	
        }

        <form onSubmit={this.handleSubmit}>
	        <label htmlFor="email">Email</label>
	        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
	        <label htmlFor="message">Message</label>
	        <input type="text" id="message" name="message" value={this.state.message} onChange={this.handleChange}/>
	        <button type="submit">Invite</button>
        </form>
      </div>
      );
  }
}

export default InviteAdminForm;
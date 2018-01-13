import React, {Component} from 'react';
import './InviteAdminForm.css';

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

  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }

  render() {
  	const {error} = this.props;

    return(
      <div className="invite-admin-form page">
        <h2>Invite an admin</h2>
        {
        	error ? <div>{error[0]}</div> : null
        	
        }
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input type="email" id="email" name="email" value={this.state.email} className="form-control" placeholder="Email address" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" value={this.state.message} className="form-control" rows="3" placeholder="Message" onChange={this.handleChange}></textarea>
            </div>
          <button type="submit" className="btn btn-primary">Invite</button>
        </form>
      </div>
      );
  }
}

export default InviteAdminForm;
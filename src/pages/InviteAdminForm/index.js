import React, {Component} from 'react';

class InviteAdminForm extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }
  
  render() {
    return(
      <div className="invite-admin-form page">
        <h2>InviteAdminForm</h2>
      </div>
      );
  }
}

export default InviteAdminForm;
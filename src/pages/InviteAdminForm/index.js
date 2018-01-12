import React, {Component} from 'react';

class InviteAdminForm extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }
  
  render() {
    return(
      <div className="admin-dashboard">
        <h2>InviteAdminForm</h2>
      </div>
      );
  }
}

export default InviteAdminForm;
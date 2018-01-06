import React, { Component } from 'react';
import history from '../../history';

class PurchaseForm extends Component {
  componentWillMount() {
    const { isAuthenticated, currentUser } = this.props;
    if (!isAuthenticated && !currentUser.admin_id) {
      history.push('/login');
    }
  }

    render() {
    return(
      <div>
        <h2>PurchaseForm</h2>
      </div>
    );
  }
}

export default PurchaseForm;
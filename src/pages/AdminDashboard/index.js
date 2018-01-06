import React, {Component} from 'react';

class AdminDashboard extends Component {
  render() {
    const { currentUser } = this.props;
    return(
      <div className="admin-dashboard">
        <h2>AdminDashboard</h2>
        <p>Welcome, {currentUser.f_name}</p>
      </div>
      );
  }
}

export default AdminDashboard;
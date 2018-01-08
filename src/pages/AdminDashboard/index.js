import React, {Component} from 'react';
import MostPopularEvents from '../../components/MostPopularEvents';
import RevenueInfo from '../../components/RevenueInfo';

class AdminDashboard extends Component {
  render() {
    console.log(this.props);
    const { currentUser, getEvents, events } = this.props;
    return(
      <div className="admin-dashboard container">
        <h2>Welcome, {currentUser.f_name}</h2>
        <div className="row">
          <MostPopularEvents getEvents={getEvents} events={events} className="col-sm-8 col-md-8 col-lg-8 col-xl-8" />
          {
            // sidebar here
          }
        </div>
        <div className="row">
          <RevenueInfo getEvents={getEvents} events={events} />
        </div>
      </div>
      );
  }
}

export default AdminDashboard;
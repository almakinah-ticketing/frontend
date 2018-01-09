import React, {Component} from 'react';
import MostPopularEvents from '../../components/MostPopularEvents';
import AdminActivities from '../../components/AdminActivities';
import RevenueInfo from '../../components/RevenueInfo';

class AdminDashboard extends Component {
  render() {
    const { currentUser, getEvents, events, eventsLoading, eventsError, getAdminActivities, adminActivities, adminActivitiesLoading, adminActivitiesError } = this.props;
    return(
      <div className="admin-dashboard container">
        <h2>Welcome, {currentUser.f_name}</h2>
        <div className="row">
        {
          <MostPopularEvents getEvents={getEvents} events={events} loading={eventsLoading} error={eventsError} />
          }
          <AdminActivities currentUser={currentUser} getAdminActivities={getAdminActivities} adminActivities={adminActivities} loading={adminActivitiesLoading} error={adminActivitiesError} />
        </div>
        <div className="row">
        {
          <RevenueInfo events={events} loading={eventsLoading} error={eventsError} />
        }
        </div>
      </div>
      );
  }
}

export default AdminDashboard;
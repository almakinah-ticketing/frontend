import React, {Component} from 'react';
import TimeAgo from 'timeago-react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class AdminActivities extends Component {
  componentWillMount() {
    const { getAdminActivities } = this.props;
    getAdminActivities();
  }

  render() {
    const { currentUser, getAdminActivities, adminActivities, loading, error } = this.props;
    return(
      <div className="admin-activity col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <h3>Admin activity</h3>
        <button className="btn refresh-admin-activity-btn" onClick={getAdminActivities} ><FontAwesome className="fa fa-refresh" /></button>
        {
          (adminActivities.length === 0)
          ? (loading)
            ? <p className="loading-message">Loading admin activity...</p>
            : (error)
            ? <p className="error-message">Oops, something went wrong!</p>
            : <p className="no-admin-activity-message">No admin activity yet. Be the first to do something!</p>
          : (
              <ul>
              {
                adminActivities.slice(0).reverse().map((activity) => {
                  var name;
                  if (activity.admin.f_name === currentUser.f_name) {
                    name = "You";
                  } else {
                    name = activity.admin.f_name;
                  }
                  return (
                    <li className="list-unstyled">{name} {activity.action} <Link to={`/events/${activity.event_id}`}>{activity.event.title}</Link> 
                      <div><TimeAgo datetime={activity.created_at} locale='en' className="activity-time-ago" live={false} /></div>
                    </li>
                  );
                })
              }
              </ul>
            )
        }
      </div>
      );
  }
}

export default AdminActivities;
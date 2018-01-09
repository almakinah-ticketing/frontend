import React, {Component} from 'react';

class AdminActivities extends Component {
  componentWillMount() {
    const { getAdminActivities } = this.props;
    getAdminActivities();
  }

  render() {
    const { currentUser, adminActivities, loading, error } = this.props;
    return(
      <div className="admin-activities col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <h3>Admin activity</h3>
        {
          (adminActivities.length === 0)
          ? (loading)
            ? <p className="loading-message">Loading admin activity...</p>
            : (error)
            ? <p className="error-message">Oops, something went wrong!</p>
            : null
          : <ul>
            {
              adminActivities.slice(0).reverse().map((activity) => {
                var name;
                if (activity.admin.f_name === currentUser.f_name) {
                  name = "You";
                } else {
                  name = activity.admin.f_name;
                }
                return (
                  <li className="list-unstyled">{name} {activity.action} {activity.event.title}</li>
                );
              })
            }
            </ul>
        }
      </div>
      );
  }
}

export default AdminActivities;
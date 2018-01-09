import { connect } from 'react-redux';
import AdminDashboard from '../pages/AdminDashboard';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure,
} from '../actions/events';
import {
  getAdminActivitiesLoading, getAdminActivities, getAdminActivitiesSuccess, getAdminActivitiesFailure
} from '../actions/adminActivities';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    events: store.events.events,
    eventsLoading: store.events.loading,
    eventsError: store.events.error,
    adminActivities: store.adminActivities.adminActivities,
    adminActivitiesLoading: store.adminActivities.loading,
    adminActivitiesError: store.adminActivities.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: (params) => {
      dispatch(getEventsLoading());
      dispatch(getEvents(params)).then((response) => {
        if (response.payload.status < 400) {
          dispatch(getEventsSuccess(response.payload.data));
        } else {
          dispatch(getEventsFailure(response.payload.response.data));
        }
      });
    },
    getAdminActivities: () => {
      dispatch(getAdminActivitiesLoading());
      dispatch(getAdminActivities()).then((response) => {
        if (response.payload.status < 400) {
          dispatch(getAdminActivitiesSuccess(response.payload.data));
        } else {
          dispatch(getAdminActivitiesFailure(response.payload.response.data));
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
import { connect } from 'react-redux';
import AdminDashboard from '../pages/AdminDashboard';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure
} from '../actions/events';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    events: store.events.events,
    loading: store.events.loading,
    error: store.events.error
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
          dispatch(getEventsFailure(response.payload.message));
        }
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
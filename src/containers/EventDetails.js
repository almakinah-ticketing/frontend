import { connect } from 'react-redux';
import EventDetailsPage from '../pages/EventDetails';
import {
  getEventLoading, getEvent, getEventSuccess, getEventFailure
} from '../actions/event';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    event: store.event.event,
    loading: store.event.loading,
    error: store.event.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvent: (eventId) => {
      dispatch(getEventLoading());
      dispatch(getEvent(eventId)).then(response => {
        console.log(response);
        if (response.payload.status<400) {
          dispatch(getEventSuccess(response.payload.data));
        } else {
          dispatch(getEventFailure(response.payload.message));
        }
      });
    }
  }
}

export const EventDetails = connect(mapStateToProps, mapDispatchToProps)(EventDetailsPage);
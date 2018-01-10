import { connect } from 'react-redux';
import EventDetailsPage from '../pages/EventDetails';
import {
  getEventLoading, getEvent, getEventSuccess, getEventFailure,
  updateEventLoading, updateEvent, updateEventSuccess, updateEventFailure
} from '../actions/events';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    ticketsBoughtInSession: store.authentication.ticketsBoughtInSession,
    event: store.events.event,
    loading: store.events.loading,
    error: store.events.error,
     // post event
    adding: store.events.adding,
    errorAdding: store.events.errorAdding
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvent: (eventId) => {
      dispatch(getEventLoading());
      dispatch(getEvent(eventId)).then(response => {
        if (response.payload.status<400) {
          dispatch(getEventSuccess(response.payload.data));
        } else {
          dispatch(getEventFailure(response.payload.response.data));
        }
      });
    },
    updateEvent: (eventId, updates) => {
      dispatch(updateEventLoading());
      dispatch(updateEvent(eventId, updates)).then(response => {
        console.log(response);
        if (response.payload.status < 400) {
          dispatch(updateEventSuccess(response.payload.data));
        } else {
          dispatch(updateEventFailure(response.payload.response.data));
        }
      });
    }
  }
}

export const EventDetails = connect(mapStateToProps, mapDispatchToProps)(EventDetailsPage);
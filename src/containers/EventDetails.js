import { connect } from 'react-redux';
import EventDetailsPage from '../pages/EventDetails';
import {
  getEventLoading, getEvent, getEventSuccess, getEventFailure
 
} from '../actions/event';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    ticketsBoughtInSession: store.authentication.ticketsBoughtInSession,
    event: store.event.event,
    loading: store.event.loading,
    error: store.event.error,
     // post event
    adding: store.event.adding,
    errorAdding: store.event.errorAdding

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
    }

  }
}

export const EventDetails = connect(mapStateToProps, mapDispatchToProps)(EventDetailsPage);
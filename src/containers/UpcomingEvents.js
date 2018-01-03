import { connect } from 'react-redux';
import UpcomingComponent from '../components/Upcoming';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure,
} from '../actions/events';

const mapStateToProps = (store) => {
  return {
    events: store.events.events,
    loading: store.events.loading,
    error: store.events.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: (categoryId) => {
      dispatch(getEventsLoading());
      dispatch(getEvents(categoryId)).then((response) => {
        if (response.payload.status < 400) {
          dispatch(getEventsSuccess(response.payload.data));
        } else {
          dispatch(getEventsFailure(response.payload.message));
        }
      });
    }
  }
}

export const Upcoming = connect(mapStateToProps, mapDispatchToProps)(UpcomingComponent);


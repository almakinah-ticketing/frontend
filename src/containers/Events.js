import { connect } from 'react-redux';
import EventsComponent from '../components/Events';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure,
  getCategoryEventsLoading, getCategoryEvents, getCategoryEventsSuccess, getCategoryEventsFailure
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
    getEvents: () => {
      dispatch(getEventsLoading());
      dispatch(getEvents()).then((response) => {
        if (response.payload.status < 400) {
          dispatch(getEventsSuccess(response.payload.data));
        } else {
          dispatch(getEventsFailure(response.payload.message));
        }
      });
    },
    getCategoryEvents: (categoryId) => {
      dispatch(getCategoryEventsLoading());
      dispatch(getCategoryEvents(categoryId)).then((response) => {
        if (response.payload.status < 400) {
          dispatch(getCategoryEventsSuccess(response.payload.data));
        } else {
          dispatch(getCategoryEventsFailure(response.payload.message));
        }
      });
    }
  }
}

export const Events = connect(mapStateToProps, mapDispatchToProps)(EventsComponent);

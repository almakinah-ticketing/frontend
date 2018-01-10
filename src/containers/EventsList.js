import { connect } from 'react-redux';
import EventsListPage from '../pages/EventsList';
// import EventFormComponent from '../pages/EventForm';
import CreateEventFormComponent from '../pages/CreateEventForm';
import {
  getCategoriesLoading, getCategories, getCategoriesSuccess, getCategoriesFailure
} from '../actions/categories';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure,
  addEventLoading, addEvent, addEventSuccess, addEventFailure, handleNewImage
} from '../actions/events';
import history from '../history';


const mapStateToProps = (store) => {
  return {
    categories: store.categories.categories,
    categoriesLoading: store.categories.loading,
    categoriesError: store.categories.error,
    events: store.events.events,
    event: store.events.event,
    eventsLoading: store.events.loading,
    eventsError: store.events.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => {
      dispatch(getCategoriesLoading());
      dispatch(getCategories()).then(response => {
        if (response.payload.status<400) {
          dispatch(getCategoriesSuccess(response.payload.data));
        } else {
          dispatch(getCategoriesFailure(response.payload.response.data));
        }
      });
    },
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
    addEvent: (event) => {
      dispatch(addEventLoading());
      dispatch(addEvent(event)).then((response) => {
        // const id = response.payload.data.id;
        if (response.payload.status < 400) {
          dispatch(addEventSuccess(response.payload.data));
          history.push(`/events/${response.payload.data.id}`);
        } else {
          dispatch(addEventFailure(response.payload.response.data));
        }
      });
    }
  }
}

export const EventsList = connect(mapStateToProps, mapDispatchToProps)(EventsListPage);
export const CreateEventForm = connect(mapStateToProps, mapDispatchToProps)(CreateEventFormComponent);

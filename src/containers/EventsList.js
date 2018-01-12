import { connect } from 'react-redux';
import EventsListPage from '../pages/EventsList';
import CreateEventFormComponent from '../pages/CreateEventForm';
import SearchFormComponent from '../components/SearchForm';
import {
  getCategoriesLoading, getCategories, getCategoriesSuccess, getCategoriesFailure
} from '../actions/categories';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure,
  getEventLoading, getEvent, getEventSuccess, getEventFailure,
  addEventLoading, addEvent, addEventSuccess, addEventFailure, handleNewImage,
  updateEventLoading, updateEvent, updateEventSuccess, updateEventFailure,
  handleNewSearchInput
} from '../actions/events';
import {
  postNewAdminActivityLoading, postNewAdminActivity, postNewAdminActivitySuccess, postNewAdminActivityFailure
} from '../actions/adminActivities';
import history from '../history';


const mapStateToProps = (store) => {
  return {
    categories: store.categories.categories,
    categoriesLoading: store.categories.loading,
    categoriesError: store.categories.error,
    events: store.events.events,
    event: store.events.event,
    eventsLoading: store.events.loading,
    eventsError: store.events.error,
    adding: store.events.adding,
    errorAdding: store.events.errorAdding,
    searchInput: store.events.searchInput
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
    addEvent: (event, adminId, action) => {
      dispatch(addEventLoading());
      dispatch(addEvent(event)).then((response) => {
        // debugger;
        // const id = response.payload.data.id;
        if (response.payload.status < 400) {
          dispatch(addEventSuccess(response.payload.data));
          dispatch(postNewAdminActivity({
            admin_id: adminId,
            event_id: response.payload.data.data.id,
            action: action
          }));
          history.push(`/events/${response.payload.data.data.id}`);
        } else {
          dispatch(addEventFailure(response.payload.response.data));
        }
      });
    },
    updateEvent: (eventId, updates, activity) => {
      dispatch(updateEventLoading());
      dispatch(updateEvent(eventId, updates)).then(response => {
        console.log(response);
        if (response.payload.status < 400) {
          dispatch(updateEventSuccess(response.payload.data));
          dispatch(postNewAdminActivity(activity));
        } else {
          dispatch(updateEventFailure(response.payload.response.data));
        }
      });
    },
    handleNewSearchInput: (searchInput) => {
      dispatch(handleNewSearchInput(searchInput));
    }




    // getCategoryEvents: (categoryId) => {
    //   dispatch(getCategoryEventsLoading());
    //   dispatch(getCategoryEvents(categoryId)).then((response) => {

    // postNewAdminActivity: (adminId, eventId, action) => {
    //   dispatch(postNewAdminActivityLoading());
    //   dispatch(postNewAdminActivity(adminId, eventId, action)).then(response => {

    //     if (response.payload.status < 400) {
    //       dispatch(postNewAdminActivitySuccess(response.payload.data));
    //     } else {
    //       dispatch(postNewAdminActivityFailure(response.payload.response.data));
    //     }
    //   });
    // }
  }
}

export const EventsList = connect(mapStateToProps, mapDispatchToProps)(EventsListPage);
export const CreateEventForm = connect(mapStateToProps, mapDispatchToProps)(CreateEventFormComponent);
export const SearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent);

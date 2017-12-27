import { connect } from 'react-redux';
import EventsListPage from '../pages/EventsList';
import {
  getCategoriesLoading, getCategories, getCategoriesSuccess, getCategoriesFailure
} from '../actions/categories';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure
  // getCategoryEventsLoading, getCategoryEvents, getCategoryEventsSuccess, getCategoryEventsFailure
} from '../actions/events';

const mapStateToProps = (store) => {
  return {
    categories: store.categories.categories,
    categoriesLoading: store.categories.loading,
    categoriesError: store.categories.error,
    events: store.events.events,
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
          dispatch(getCategoriesFailure(response.payload.message));
        }
      });
    },
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
    // getCategoryEvents: (categoryId) => {
    //   dispatch(getCategoryEventsLoading());
    //   dispatch(getCategoryEvents(categoryId)).then((response) => {
    //     if (response.payload.status < 400) {
    //       dispatch(getCategoryEventsSuccess(response.payload.data));
    //     } else {
    //       dispatch(getCategoryEventsFailure(response.payload.message));
    //     }
    //   });
    // }
  }
}

export const EventsList = connect(mapStateToProps, mapDispatchToProps)(EventsListPage);

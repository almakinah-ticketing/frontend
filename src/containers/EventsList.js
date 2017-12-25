import { connect } from 'react-redux';
import EventsList from '../pages/EventsList';
import {
  getCategoriesLoading, getCategories, getCategoriesSuccess, getCategoriesFailure
} from '../actions/categories';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure
} from '../actions/events';

const mapStateToProps = (store) => {
  return {
    categories: store.categories.categories,
    loading: store.categories.loading,
    error: store.categories.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => {
      dispatch(getCategoriesLoading());
      dispatch(getCategories()).then(response => {
        if(response.payload.status < 400){
          dispatch(getCategoriesSuccess(response.payload.data));
        } else {
          dispatch(getCategoriesFailure(response.payload.message));
        }
      });
    },
    getEvents: () => {
      dispatch(getEventsLoading());
      dispatch(getEvents()).then(response => {
        if(response.payload.status < 400){
          dispatch(getEventsSuccess(response.payload.data));
        } else {
          dispatch(getEventsFailure(response.payload.message));
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);

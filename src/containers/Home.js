import { connect } from 'react-redux';
import HomeComponent from '../pages/Home';
import AboutComponent from '../pages/About';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure,
  handleNewSearchInput
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
    handleNewSearchInput: (searchInput) => {
      dispatch(handleNewSearchInput(searchInput));
    }
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export const About = connect(mapStateToProps, mapDispatchToProps)(AboutComponent);


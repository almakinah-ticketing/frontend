import {
    GET_CALENDAR_LOADING, GET_CALENDAR_SUCCESS, GET_CALENDAR_FAILURE
  } from '../actions/calendar';
  
  const INITIAL_STATE = {
    calendar: [],
    loading: false,
    error: null
  }
  
  export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_CALENDAR_LOADING:
        return {...currentState, loading: true};
        break;
      case GET_CALENDAR_SUCCESS:
        return {...currentState, loading: false, error: null, calendar: action.calendar};
        break;
      case GET_CALENDAR_FAILURE:
        return {...currentState, loading: false, error: action.error};
        break;
      default:
        return currentState;
        break;
    }
  }
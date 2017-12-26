import {
  GET_EVENTS_LOADING, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE
  // GET_CATEGORY_EVENTS_LOADING, GET_CATEGORY_EVENTS_SUCCESS, GET_CATEGORY_EVENTS_FAILURE
} from '../actions/events';

const INITIAL_STATE = {
  events: [],
  loading: false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EVENTS_LOADING:
    // case GET_CATEGORY_EVENTS_LOADING:
      return {
        ...currentState, 
        loading: true
      };
      break;
    case GET_EVENTS_SUCCESS:
    // case GET_CATEGORY_EVENTS_SUCCESS:
      return {
        ...currentState, 
        loading: false, 
        error: null,
        events: action.events
      };
      break;
    case GET_EVENTS_FAILURE:
    // case GET_CATEGORY_EVENTS_FAILURE:
      return {
        ...currentState, 
        loading: false, 
        error: action.error
      };
      break;
    default:
      return currentState;
      break;
  }
}
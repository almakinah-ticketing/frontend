import {
  GET_EVENT_LOADING, GET_EVENT_SUCCESS, GET_EVENT_FAILURE,
} from '../actions/event';

const INITIAL_STATE = {
  event: {},
  loading: false,
  error: null,
 
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EVENT_LOADING:
      return {
        ...currentState, 
        loading: true
      };
      break;
    case GET_EVENT_SUCCESS:
      return {
        ...currentState, 
        event: action.event,
        loading: false, 
        error: null
      };
      break;
    case GET_EVENT_FAILURE:
      return {
        ...currentState, 
        error: action.error,
        loading: false        
      };
      break;
  
    default:
      return currentState;
      break;
  }
}
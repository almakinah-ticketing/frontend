import {
  GET_EVENTS_LOADING, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE,
  GET_EVENT_LOADING, GET_EVENT_SUCCESS, GET_EVENT_FAILURE,
  ADD_EVENT_LOADING, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE,
  UPDATE_EVENT_LOADING, UPDATE_EVENT, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAILURE,
  HANDLE_NEW_IMAGE,
  HANDLE_NEW_SEARCH_INPUT
} from '../actions/events';

const INITIAL_STATE = {
  events: [],
  loading: false,
  error: null,
  event: {},
  title:"",
  img:"",
  overview:"",
  agenda:"",
  start_datetime:"",
  end_datetime:"",
  adding: false,
  errorAdding: null,
  searchInput: ''
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EVENTS_LOADING:
      return {
        ...currentState, 
        loading: true
      };
      break;
    case GET_EVENTS_SUCCESS:
      return {
        ...currentState, 
        loading: false, 
        error: null,
        events: action.events
      };
      break;
    case GET_EVENTS_FAILURE:
      return {
        ...currentState, 
        loading: false, 
        error: action.error
      };
      break;
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
    case ADD_EVENT_LOADING:
      return {
        ...currentState,
        adding: true
      };
      break;
    case ADD_EVENT_SUCCESS:
     return {
      ...currentState,
      adding: false,
      event: [...currentState, action.event]
      };
      break;
    case ADD_EVENT_FAILURE:
     return {
      ...currentState,
      adding: false,
      errorAdding: action.error
      };
      break;
    case UPDATE_EVENT_LOADING:
      return {
        ...currentState,
        error: null,
        loading: true
      };
      break;
    case UPDATE_EVENT_SUCCESS:
     return {
      ...currentState,
      loading: false,
      error: null,
      event: action.event
      };
      break;
    case UPDATE_EVENT_FAILURE:
     return {
      ...currentState,
      loading: false,
      error: action.error
      };
      break;
      case HANDLE_NEW_IMAGE:
        return {
          ...currentState, 
          img: action.img
        };
        break;
      case HANDLE_NEW_SEARCH_INPUT:
        return {
          ...currentState,
          searchInput: action.searchInput
        };
        break;
    default:
      return currentState;
      break;
  }
}
import {
  GET_EVENTS_LOADING, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE,
  ADD_EVENT_LOADING, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE,
   HANDLE_NEW_IMAGE
  // GET_CATEGORY_EVENTS_LOADING, GET_CATEGORY_EVENTS_SUCCESS, GET_CATEGORY_EVENTS_FAILURE
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
  errorAdding: null
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
      console.log(action.events);
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
      // Add Event

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
      // handle new image

      case HANDLE_NEW_IMAGE:
      return {...currentState, img: action.img};
      break;

    default:
      return currentState;
      break;
  }
}
import {
  POST_NEW_ATTENDEE_LOADING, POST_NEW_ATTENDEE_SUCCESS, POST_NEW_ATTENDEE_FAILURE
} from '../actions/attendee';

const INITIAL_STATE = {
  attendee: {},
  loading: false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_NEW_ATTENDEE_LOADING:
      return {...currentState, loading: true};
      break;
    case POST_NEW_ATTENDEE_SUCCESS:
      return {...currentState, loading: false, error: null, attendee: action.attendee};
      break;
    case POST_NEW_ATTENDEE_FAILURE:
      return {...currentState, loading: false, error: action.error};
      break;
    default:
      return currentState;
      break;
  }
}
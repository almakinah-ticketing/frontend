import {
  LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, SET_CURRENT_USER, UPDATE_ATTENDEE_TICKETS
} from '../actions/authentication';
import isEmpty from 'lodash/isEmpty';

const INITIAL_STATE = {
  isAuthenticated: false,
  currentUser: {},
  ticketsBoughtInSession: [],
  loading: false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...currentState,
        loading: true,
        error: null
      }
      break;
    case LOGIN_SUCCESS:
      return {
        ...currentState,
        loading: false,
        error: null
      }
      break;
    case SET_CURRENT_USER:
      return {
        ...currentState,
        isAuthenticated: !isEmpty(action.currentUser),
        currentUser: action.currentUser
      };
      break;
    case LOGIN_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
      break;
    default:
      return currentState;
      break;
  }
}
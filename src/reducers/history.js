import {
    GET_HISTORY_LOADING, GET_HISTORY_SUCCESS, GET_HISTORY_FAILURE
  } from '../actions/history';
  
  const INITIAL_STATE = {
    history: [],
    loading: false,
    error: null
  }
  
  export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_HISTORY_LOADING:
        return {...currentState, loading: true};
        break;
      case GET_HISTORY_SUCCESS:
        return {...currentState, loading: false, error: null, history: action.history};
        break;
      case GET_HISTORY_FAILURE:
        return {...currentState, loading: false, error: action.error};
        break;
      default:
        return currentState;
        break;
    }
  }
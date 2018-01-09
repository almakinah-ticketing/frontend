import {
  GET_ADMIN_ACTIVITIES_LOADING, GET_ADMIN_ACTIVITIES_SUCCESS, GET_ADMIN_ACTIVITIES_FAILURE,
} from '../actions/adminActivities';

const INITIAL_STATE = {
  adminActivities: [],
  loading: false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ADMIN_ACTIVITIES_LOADING:
      return {
        ...currentState, 
        loading: true
      };
      break;
    case GET_ADMIN_ACTIVITIES_SUCCESS:
      return {
        ...currentState, 
        loading: false, 
        error: null,
        adminActivities: action.adminActivities
      };
      break;
    case GET_ADMIN_ACTIVITIES_FAILURE:
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
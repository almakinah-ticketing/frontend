import {
	POST_NEW_ADMIN_LOADING, POST_NEW_ADMIN_SUCCESS, POST_NEW_ADMIN_FAILURE,
  UPDATE_ADMIN_LOADING, UPDATE_ADMIN_SUCCESS, UPDATE_ADMIN_FAILURE,
  GET_ADMIN_LOADING, GET_ADMIN, GET_ADMIN_SUCCESS, GET_ADMIN_FAILURE
} from '../actions/admins'


const INITIAL_STATE = {
  admin: {},
  loading: false,
  error: null, 
  adding: false,
}

export default (currentState = INITIAL_STATE, action) => {
	switch (action.type) {

		// Add Admin

		case POST_NEW_ADMIN_LOADING:
      return {...currentState, loading: true};
      break;
    case POST_NEW_ADMIN_SUCCESS:
      return{...currentState, adding: false, error: null,  admin: [...currentState, action.admin]};
      break;
    case POST_NEW_ADMIN_FAILURE:
      return{...currentState, adding: false, error: action.error};
      break;

     // Update Admin
    case UPDATE_ADMIN_LOADING:
     return {...currentState, error:null, loading: true};
     break;
    case UPDATE_ADMIN_SUCCESS:
    	return {...currentState, loading: false, error: null, admin: action.admin};
    	break;
    case UPDATE_ADMIN_FAILURE:
      return{...currentState, adding: false, error: action.error};
      break;

      // Get Admin
    case GET_ADMIN_LOADING:
      return {...currentState, loading: true};
      break;
    case GET_ADMIN_SUCCESS:
      return {...currentState, loading: false, error: null, admin: action.admin};
      break;
    case GET_ADMIN_FAILURE:
      return {...currentState, loading: false, error: action.error};
      break;
    default:
      return currentState;
      break;
	}
}

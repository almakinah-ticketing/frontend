import{
  GET_TYPES_LOADING, GET_TYPES, GET_TYPES_SUCCESS, GET_TYPES_FAILURE, ADD_TYPE_LOADING, ADD_TYPE, ADD_TYPE_SUCCESS, ADD_TYPE_FAILURE
} from '../actions/ticketTypes';

const INITIAL_STATE = {
  types: [],
  loading: false,
  error: null,
  type: {}, 
  adding: false,
  errorAdding: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {

    // Get Types
    case GET_TYPES_LOADING:
      return {...currentState, loading: true};
      break;
    case GET_TYPES_SUCCESS:
      return {...currentState, loading: false, error: null, types: action.types};
      break;
    case GET_TYPES_FAILURE:
      return {...currentState, loading: false, error: action.error};
      break;

    // Add Types

    case ADD_TYPE_LOADING:
      return {...currentState, adding: true};
      break;
    case ADD_TYPE_SUCCESS:
      return{...currentState, adding: false, type: [...currentState, action.type]};
      break;
    case ADD_TYPE_FAILURE:
      return{...currentState, adding: false, errorAdding: action.error};
      break;

    default:
      return currentState;
      break;
  }
}
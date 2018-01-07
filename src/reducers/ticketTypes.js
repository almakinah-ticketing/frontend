import{
  GET_TYPES_LOADING, GET_TYPES, GET_TYPES_SUCCESS, GET_TYPES_FAILURE
} from '../actions/ticketTypes';

const INITIAL_STATE = {
  types: [],
  loading: false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TYPES_LOADING:
      return {...currentState, loading: true};
      break;
    case GET_TYPES_SUCCESS:
      return {...currentState, loading: false, error: null, types: action.types};
      break;
    case GET_TYPES_FAILURE:
      return {...currentState, loading: false, error: action.error};
      break;
    default:
      return currentState;
      break;
  }
}
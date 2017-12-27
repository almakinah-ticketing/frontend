import {
  GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE
} from '../actions/categories';

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES_LOADING:
      return {...currentState, loading: true};
      break;
    case GET_CATEGORIES_SUCCESS:
      return {...currentState, loading: false, error: null, categories: action.categories};
      break;
    case GET_CATEGORIES_FAILURE:
      return {...currentState, loading: false, error: action.error};
      break;
    default:
      return currentState;
      break;
  }
}
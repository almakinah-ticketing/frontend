import {
  GET_CATEGORIES_LOADING,  GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE
} from '../actions/categories'

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error:null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES_LOADING:
      return {...currentState, loading: true};
    case GET_CATEGORIES_SUCCESS:
      return {...currentState, loading: false, categories: action.categories};
    case GET_CATEGORIES_FAILURE:
      return {...currentState, loading: false, error: action.error};
    default:
      return currentState;

  }
}
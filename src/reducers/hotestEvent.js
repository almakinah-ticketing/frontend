import {
GET_HOTESTEVENT_LOADING, GET_HOTESTEVENT, GET_HOTESTEVENT_SUCCESS, GET_HOTESTEVENT_FAILURE
} from '../actions/hotestEvent'


const INITIAL_STATE = {
  hotestEvent: {},
  loading: false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HOTESTEVENT_LOADING:
      return {...currentState, loading: true};
    case GET_HOTESTEVENT_SUCCESS:
      return {...currentState, loading: false, hotestEvent: action.hotestEvent};
    case GET_HOTESTEVENT_FAILURE:
      return {...currentState,loading: false, error: action.error};
    default:
      return currentState;

  }
}
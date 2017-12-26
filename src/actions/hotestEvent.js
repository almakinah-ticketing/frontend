import Axios from 'axios';
import { hotestEventApi} from '../apiConfig';

// Action types

// Get HotestEvent

export const GET_HOTESTEVENT_LOADING = 'GET_HOTESTEVENT_LOADING';
export const GET_HOTESTEVENT = 'GET_HOTESTEVENT';
export const GET_HOTESTEVENT_SUCCESS = 'GET_HOTESTEVENT_SUCCESS';
export const GET_HOTESTEVENT_FAILURE = 'GET_HOTESTEVENT_FAILURE';

// Action creators
// Get HotestEvent

export const getHotestEventLoading = () => {
  return{
    type: GET_HOTESTEVENT_LOADING
  }
}

export const getHotestEvent = () => {
  const payload = Axios.get(hotestEventApi);
  return{
    type: GET_HOTESTEVENT, payload
  }
}

export const getHotestEventSuccess = (hotestEvent) => {
  return{
    type: GET_HOTESTEVENT_SUCCESS, hotestEvent
  }
}

export const getHotestEventFailure = (error) => {
  return{
    type: GET_HOTESTEVENT_FAILURE, error
  }
}
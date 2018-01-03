import Axios from 'axios';
import { eventApi } from '../apiConfig';

/* Action types */

// Get event

export const GET_EVENT_LOADING = 'GET_EVENT_LOADING';
export const GET_EVENT = 'GET_EVENT';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';

/* Action creators */

// Get event

export const getEventLoading = () => {
  return{
    type: GET_EVENT_LOADING
  }
}

export const getEvent = (eventId) => {
  const payload = Axios.get(eventApi(eventId));
  return{
    type: GET_EVENT,
    payload
  }
}

export const getEventSuccess = (event) => {
  return{
    type: GET_EVENT_SUCCESS,
    event
  }
}

export const getEventFailure = (error) => {
  return{
    type: GET_EVENT_FAILURE,
    error
  }
}

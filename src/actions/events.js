import Axios from 'axios';
import { eventsApi, postEventApi, eventApi } from '../apiConfig';

/* Action types */

// Get all events
export const GET_EVENTS_LOADING = 'GET_EVENTS_LOADING';
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

// Get event
export const GET_EVENT_LOADING = 'GET_EVENT_LOADING';
export const GET_EVENT = 'GET_EVENT';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';

// Add event
export const ADD_EVENT_LOADING = 'ADD_EVENT_LOADING';
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

// Update event
export const UPDATE_EVENT_LOADING = 'UPDATE_EVENT_LOADING';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_FAILURE = 'UPDATE_EVENT_FAILURE';

// Handle new image
export const HANDLE_NEW_IMAGE = 'HANDLE_NEW_IMAGE';


/* Action object creators */

// Get all events
export const getEventsLoading = () => {
  return {
    type : GET_EVENTS_LOADING
  }
}

export const getEvents = (params) => {
  const payload = Axios.get(eventsApi(params));
  return {
    type: GET_EVENTS,
    payload
  }
}

export const getEventsSuccess = (events) => {
  return {
    type: GET_EVENTS_SUCCESS,
    events
  }
}

export const getEventsFailure = (error) => {
  return { 
    type: GET_EVENTS_FAILURE,
    error
  }
}

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

// Add event
export const addEventLoading = () => {
  return{
    type: ADD_EVENT_LOADING
  }
}

export const addEvent = (event) => {
  const payload = Axios.post(postEventApi, event);
  return{
    type: ADD_EVENT,
    payload
  }
}

export const addEventSuccess = (event) => {
  return{
    type:ADD_EVENT_SUCCESS,
    event
  }
}

export const addEventFailure = (error) => {
  return{
    type: ADD_EVENT_FAILURE,
    error
  }
}

// Handle new image in event form

export const handleNewImage = (encodedString, fileName) => {
  return {
    type: HANDLE_NEW_IMAGE,
    newImage: encodedString,
    imageName: fileName
  }
}

// Update event
export const updateEventLoading = () => {
  return {
    type: UPDATE_EVENT_LOADING
  };
}

export const updateEvent = (eventId, updates) => {
  const payload = Axios.patch(eventApi(eventId), updates);
  return {
    type: UPDATE_EVENT,
    payload
  };
}

export const updateEventSuccess = (event) => {
  return {
    type: UPDATE_EVENT_SUCCESS,
    event
  };
}

export const updateEventFailure = (error) => {
  return {
    type: UPDATE_EVENT_FAILURE,
    error
  };
}

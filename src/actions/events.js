import Axios from 'axios';
import { eventsApi , postEventApi} from '../apiConfig';

/* Action types */

// Get all events
export const GET_EVENTS_LOADING = 'GET_EVENTS_LOADING';
export const  GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';


// Add event

export const ADD_EVENT_LOADING = 'ADD_EVENT_LOADING';
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

// handle new image
export const HANDLE_NEW_IMAGE = 'HANDLE_NEW_IMAGE';



// // Get events by category if weren't checking in apiConfig
// export const GET_CATEGORY_EVENTS_LOADING = 'GET_CATEGORY_EVENTS_LOADING';
// export const  GET_CATEGORY_EVENTS = 'GET_CATEGORY_EVENTS';
// export const GET_CATEGORY_EVENTS_SUCCESS = 'GET_CATEGORY_EVENTS_SUCCESS';
// export const GET_CATEGORY_EVENTS_FAILURE = 'GET_CATEGORY_EVENTS_FAILURE';



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


// Add Event

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

// handle new image

export const handleNewImage = (encodedString, fileName) => {
  return {
    type: HANDLE_NEW_IMAGE,
    newImage: encodedString,
    imageName: fileName
  }
}

// // Get events by category if weren't checking in apiConfig

// export const getCategoryEventsLoading = () => {
//   return {
//     type : GET_CATEGORY_EVENTS_LOADING
//   }
// }

// export const getCategoryEvents = (categoryId) => {
//   const payload = Axios.get(categoryEventsApi(categoryId));
//   return {
//     type: GET_CATEGORY_EVENTS,
//     payload
//   }
// }

// export const getCategoryEventsSuccess = (events) => {
//   return {
//     type: GET_CATEGORY_EVENTS_SUCCESS,
//     events
//   }
// }

// export const getCategoryEventsFailure = (error) => {
//   return { 
//     type: GET_CATEGORY_EVENTS_FAILURE,
//     error
//   }
// }
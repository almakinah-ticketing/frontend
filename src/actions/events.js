import Axios from 'axios';
import { eventsApi } from '../apiConfig';

/* Action types */

// Get all events
export const GET_EVENTS_LOADING = 'GET_EVENTS_LOADING';
export const  GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

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

export const getEvents = (categoryId) => {
  const payload = Axios.get(eventsApi(categoryId));
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
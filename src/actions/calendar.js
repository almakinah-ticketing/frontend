import Axios from 'axios';
import {calendarApi} from '../apiConfig';


// Action CALENDAR

// Get All CALENDAR

export const GET_CALENDAR_LOADING = 'GET_CALENDAR_LOADING';
export const GET_CALENDAR = 'GET_CALENDAR';
export const GET_CALENDAR_SUCCESS = 'GET_CALENDAR_SUCCESS';
export const GET_CALENDAR_FAILURE = 'GET_CALENDAR_FAILURE';

// Action Creators

// Get All CALENDAR

export const getCalendarLoading = () => {
  return{
    type: GET_CALENDAR_LOADING
  }
}

export const getCalendar = () => {
  const payload = Axios.get(calendarApi);
  return{
    type: GET_CALENDAR,
    payload
  }

}

export const getCalendarSuccess = (calendar) => {
  return{
    type: GET_CALENDAR_SUCCESS,
    calendar
  }
}

export const getCalendarFailure = (error) => {
  return{
    type: GET_CALENDAR_FAILURE,
    error
  }
}

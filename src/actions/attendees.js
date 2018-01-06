import Axios from 'axios';
import { attendeesApi } from '../apiConfig';

/* Action types */

// Post new attendee
export const POST_NEW_ATTENDEE_LOADING = 'POST_NEW_ATTENDEE_LOADING';
export const POST_NEW_ATTENDEE = 'POST_NEW_ATTENDEE';
export const POST_NEW_ATTENDEE_SUCCESS = 'POST_NEW_ATTENDEE_SUCCESS';
export const POST_NEW_ATTENDEE_FAILURE = 'POST_NEW_ATTENDEE_FAILURE';


/* Action object creators */

// Post new attendee
export function postNewAttendeeLoading() {
  return {
    type: POST_NEW_ATTENDEE_LOADING
  };
} 

export function postNewAttendee(attendee) {
  const payload = Axios.post(attendeesApi, attendee);
  return {
    type: POST_NEW_ATTENDEE,
    payload
  };
} 

export function postNewAttendeeSuccess(attendee) {
  return {
    type: POST_NEW_ATTENDEE_SUCCESS,
    attendee
  };
} 

export function postNewAttendeeFailure(error) {
  return {
    type: POST_NEW_ATTENDEE_FAILURE,
    error
  };
} 
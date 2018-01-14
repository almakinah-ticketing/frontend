import Axios from 'axios';
import { adminActivitiesApi } from '../apiConfig';

/* Action types */

// Get all admin activities
export const GET_ADMIN_ACTIVITIES_LOADING = 'GET_ADMIN_ACTIVITIES_LOADING';
export const GET_ADMIN_ACTIVITIES = 'GET_ADMIN_ACTIVITIES';
export const GET_ADMIN_ACTIVITIES_SUCCESS = 'GET_ADMIN_ACTIVITIES_SUCCESS';
export const GET_ADMIN_ACTIVITIES_FAILURE = 'GET_ADMIN_ACTIVITIES_FAILURE';

// Post new admin activity
export const POST_NEW_ADMIN_ACTIVITY_LOADING = 'POST_NEW_ADMIN_ACTIVITY_LOADING';
export const POST_NEW_ADMIN_ACTIVITY = 'POST_NEW_ADMIN_ACTIVITY';
export const POST_NEW_ADMIN_ACTIVITY_SUCCESS = 'POST_NEW_ADMIN_ACTIVITY_SUCCESS';
export const POST_NEW_ADMIN_ACTIVITY_FAILURE = 'POST_NEW_ADMIN_ACTIVITY_FAILURE';


/* Action object creators */

// Get all admin activities
export function getAdminActivitiesLoading() {
  return {
    type: GET_ADMIN_ACTIVITIES_LOADING
  };
} 

export function getAdminActivities() {
  const payload = Axios.get(adminActivitiesApi);
  return {
    type: GET_ADMIN_ACTIVITIES,
    payload
  };
} 

export function getAdminActivitiesSuccess(adminActivities) {
  return {
    type: GET_ADMIN_ACTIVITIES_SUCCESS,
    adminActivities
  };
} 

export function getAdminActivitiesFailure(error) {
  return {
    type: GET_ADMIN_ACTIVITIES_FAILURE,
    error
  };
} 


// Post new admin activity
export function postNewAdminActivityLoading() {
  return {
    type: POST_NEW_ADMIN_ACTIVITY_LOADING
  };
} 

export function postNewAdminActivity(activity) {
  const payload = Axios.post(adminActivitiesApi, activity);
  return {
    type: POST_NEW_ADMIN_ACTIVITY,
    payload
  };
} 

export function postNewAdminActivitySuccess(adminActivities) {
  return {
    type: POST_NEW_ADMIN_ACTIVITY_SUCCESS,
    adminActivities
  };
} 

export function postNewAdminActivityFailure(error) {
  return {
    type: POST_NEW_ADMIN_ACTIVITY_FAILURE,
    error
  };
} 


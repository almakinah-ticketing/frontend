import Axios from 'axios';
import { adminActivitiesApi } from '../apiConfig';

/* Action types */

// Get all admin activities
export const GET_ADMIN_ACTIVITIES_LOADING = 'GET_ADMIN_ACTIVITIES_LOADING';
export const GET_ADMIN_ACTIVITIES = 'GET_ADMIN_ACTIVITIES';
export const GET_ADMIN_ACTIVITIES_SUCCESS = 'GET_ADMIN_ACTIVITIES_SUCCESS';
export const GET_ADMIN_ACTIVITIES_FAILURE = 'GET_ADMIN_ACTIVITIES_FAILURE';

// Post new admin activity


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
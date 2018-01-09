import Axios from 'axios';
import { adminsApi } from '../apiConfig';

/* Action types */

// Post new admin
export const POST_NEW_ADMIN_LOADING = 'POST_NEW_ADMIN_LOADING';
export const POST_NEW_ADMIN = 'POST_NEW_ADMIN';
export const POST_NEW_ADMIN_SUCCESS = 'POST_NEW_ADMIN_SUCCESS';
export const POST_NEW_ADMIN_FAILURE = 'POST_NEW_ADMIN_FAILURE';


/* Action object creators */

// Post new admin
export function postNewAdminLoading() {
  return {
    type: POST_NEW_ADMIN_LOADING
  };
} 

export function postNewAdmin(admin) {
  const payload = Axios.post(adminsApi, admin);
  return {
    type: POST_NEW_ADMIN,
    payload
  };
} 

export function postNewAdminSuccess(admin) {
  return {
    type: POST_NEW_ADMIN_LOADING,
    admin
  };
} 

export function postNewAdminFailure(admin) {
  return {
    type: POST_NEW_ADMIN_FAILURE,
    error
  };
} 
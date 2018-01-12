import Axios from 'axios';
import { adminsApi, adminInvitationApi, updateAdminApi, getInvitedAdminApi} from '../apiConfig';

/* Action types */

// Post new admin
export const POST_NEW_ADMIN_LOADING = 'POST_NEW_ADMIN_LOADING';
export const POST_NEW_ADMIN = 'POST_NEW_ADMIN';
export const POST_NEW_ADMIN_SUCCESS = 'POST_NEW_ADMIN_SUCCESS';
export const POST_NEW_ADMIN_FAILURE = 'POST_NEW_ADMIN_FAILURE';

// Update admin

export const UPDATE_ADMIN_LOADING = 'UPDATE_ADMIN_LOADING';
export const UPDATE_ADMIN = 'UPDATE_ADMIN';
export const UPDATE_ADMIN_SUCCESS = 'UPDATE_ADMIN_SUCCESS';
export const UPDATE_ADMIN_FAILURE = 'UPDATE_ADMIN_FAILURE';

// Get Admin

export const GET_ADMIN_LOADING = 'GET_ADMIN_LOADING';
export const GET_ADMIN = 'GET_ADMIN';
export const GET_ADMIN_SUCCESS = 'GET_ADMIN_SUCCESS';
export const GET_ADMIN_FAILURE = 'GET_ADMIN_FAILURE';


/* Action object creators */

// Post new admin
export function postNewAdminLoading() {
  return {
    type: POST_NEW_ADMIN_LOADING
  };
} 

export function postNewAdmin(admin) {
  const payload = Axios.post(adminInvitationApi, {admin});
  return {
    type: POST_NEW_ADMIN,
    payload
  };
} 

export function postNewAdminSuccess(admin) {
  return {
    type: POST_NEW_ADMIN_SUCCESS,
    admin
  };
} 

export function postNewAdminFailure(error) {
  return {
    type: POST_NEW_ADMIN_FAILURE,
    error
  };
} 

// Update Admin

export function updateAdminLoading(id) {
  return {
    type: UPDATE_ADMIN_LOADING,
    id
  };
} 

export function updateAdmin(id, update) {
  const payload = Axios.patch(updateAdminApi(id), {admin: update});
  return {
    type: UPDATE_ADMIN,
    payload
  };
} 

export function updateAdminSuccess(admin) {
  return {
    type: UPDATE_ADMIN_SUCCESS,
    admin
  };
}

export function updateAdminFailure(error) {
  return {
    type: UPDATE_ADMIN_FAILURE,
    error

  };
}

// Get Admin


export const getAdminLoading = () => {
  return{
    type: GET_ADMIN_LOADING
  }
}

export const getAdmin = (adminId, invitationToken) => {
  const payload = Axios.get(getInvitedAdminApi(adminId, invitationToken));
  return{
    type: GET_ADMIN,
    payload
  }
}

export const getAdminSuccess = (admin) => {
  return{
    type: GET_ADMIN_SUCCESS,
    admin
  }
}

export const getAdminFailure = (error) => {
  return{
    type: GET_ADMIN_FAILURE,
    error
  }
}
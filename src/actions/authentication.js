import Axios from 'axios';
import { loginsApi } from '../apiConfig';

/* Action types */

// Login
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// // Logout
// export const LOGOUT = 'LOGOUT';

// Set current user after login returns authentication token
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* Action object creators */

// Login
export const loginLoading = () => {
  return {
    type: LOGIN_LOADING
  };
}

export const login = (userType, data) => {
  const payload = Axios.post(loginsApi(userType), data);
  return {
    type: LOGIN,
    payload
  };
}

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    token
  };
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

// // Logout
// export const logout = (userType) => {
//   return {
//     type: LOGOUT
//   };
// }

// Set current user after login returns authentication token
export const setCurrentUser = (currentUser) => {
  return {
    type: SET_CURRENT_USER,
    currentUser
  };
}


import axios from 'axios';

/* Action types */

// Set current user after login returns authentication token
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* Action object creators */

// Set current user after login returns authentication token
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
} 
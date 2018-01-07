import Axios from 'axios';
import { ticketTypesApi } from '../apiConfig';

// Action Types

// Get All Types

export const GET_TYPES_LOADING = 'GET_TYPES_LOADING';
export const GET_TYPES = 'GET_TYPES';
export const GET_TYPES_SUCCESS = 'GET_TYPES_SUCCESS';
export const GET_TYPES_FAILURE = 'GET_TYPES_FAILURE';

// Action Creators

// Get All Types

export const getTypesLoading = () => {
  return{
    type: GET_TYPES_LOADING
  }
}

export const getTypes = (eventId) => {
  const payload = Axios.get(ticketTypesApi(eventId));
  return{
    type: GET_TYPES,
    payload
  }

}

export const getTypesSuccess = (types) => {
  return{
    type: GET_TYPES_SUCCESS,
    types
  }
}

export const getTypesFailure = (error) => {
  return{
    type: GET_TYPES_FAILURE,
    error
  }
}

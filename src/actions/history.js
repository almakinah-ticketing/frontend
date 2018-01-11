import Axios from 'axios';
import {historyApi} from '../apiConfig';


// Action HISTORY

// Get All HISTORY

export const GET_HISTORY_LOADING = 'GET_HISTORY_LOADING';
export const GET_HISTORY = 'GET_HISTORY';
export const GET_HISTORY_SUCCESS = 'GET_HISTORY_SUCCESS';
export const GET_HISTORY_FAILURE = 'GET_HISTORY_FAILURE';

// Action Creators

// Get All HISTORY

export const getHistoryLoading = () => {
  return{
    type: GET_HISTORY_LOADING
  }
}

export const getHistory = () => {
  const payload = Axios.get(historyApi);
  return{
    type: GET_HISTORY,
    payload
  }

}

export const getHistorySuccess = (history) => {
  return{
    type: GET_HISTORY_SUCCESS,
    history
  }
}

export const getHistoryFailure = (error) => {
  return{
    type: GET_HISTORY_FAILURE,
    error
  }
}

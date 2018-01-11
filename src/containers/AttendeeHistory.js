import { connect } from 'react-redux';
import HistoryComponent from '../components/History';
import {getHistoryLoading, getHistory, getHistorySuccess, getHistoryFailure} from '../actions/history';

const mapStateToProps = (store) => {
  return {
    history: store.history.history,
    loading: store.history.loading,
    error: store.history.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHistory: () => {
      dispatch(getHistoryLoading());
      dispatch(getHistory()).then(response => {
        if (response.payload.status<400) {
          dispatch(getHistorySuccess(response.payload.data));

        } else {
          dispatch(getHistoryFailure(response.payload.message));
        }
      });
    }
  }
}

export const History = connect(mapStateToProps, mapDispatchToProps)(HistoryComponent);
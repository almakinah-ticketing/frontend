import { connect } from 'react-redux';
import Header from '../components/Header';
import {
  setCurrentUser
} from '../actions/authentication';
import {
  getEventsLoading, getEvents, getEventsSuccess, getEventsFailure
} from '../actions/events';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (userType) => {
      localStorage.removeItem('jwtToken');
      setAuthorizationToken();
      dispatch(setCurrentUser({}));
      switch(userType) {
        case 'attendees':
          history.push('/login');
          break;
        case 'admins':
          history.push('/admin/login');
          break;
        default:
          break;
      }
    },
    getEvents: (params) => {
      dispatch(getEventsLoading());
      dispatch(getEvents(params)).then((response) => {
        if (response.payload.status < 400) {
          dispatch(getEventsSuccess(response.payload.data));
        } else {
          dispatch(getEventsFailure(response.payload.response.data));
        }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
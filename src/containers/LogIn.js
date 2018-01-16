import { connect } from 'react-redux';
import LogInComponent from '../pages/LogIn';
import LogInAdminComponent from '../pages/LogInAdmin';
import {
  loginLoading, login, loginSuccess, loginFailure, setCurrentUser
} from '../actions/authentication';
import { handleNewSearchInput } from '../actions/events';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import history from '../history';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    loading: store.authentication.loading,
    error: store.authentication.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginLoading: () => {
      dispatch(loginLoading());
    },
    login: (userType, data, lastLocation) => {
      dispatch(login(userType, data)).then(response => {
        if (response.payload.status<400) {
          dispatch(loginSuccess(response.payload.data));
          const token = response.payload.data.auth_token;
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(jwt.decode(token)));
          switch(userType) {
            case 'attendees':
              if (lastLocation && lastLocation.pathname !== '/login' && lastLocation.pathname !== '/admin/login') {
                history.goBack();
              } else {
                history.push('/calendar');
              }
              break;
            case 'admins':
              if (lastLocation && lastLocation.pathname !== '/admin/login' && lastLocation.pathname !== '/login'  && lastLocation.pathname !== '/newadmin') {
                history.goBack();
              } else {
                history.push('/admin/dashboard');
              }
              break;
            default:
              break;
          }
        } else {
          if (response.payload.response.status === 401) {
            dispatch(loginFailure(response.payload.response.data));
          } else {
            dispatch(loginFailure("Oops, something went wrong! Please try again."));
          }
        }
      });
    },
    handleNewSearchInput: (searchInput) => {
      dispatch(handleNewSearchInput(searchInput));
    }
  }
}

export const LogIn = connect(mapStateToProps, mapDispatchToProps)(LogInComponent);
export const LogInAdmin = connect(mapStateToProps, mapDispatchToProps)(LogInAdminComponent);
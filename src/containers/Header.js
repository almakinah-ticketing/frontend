import { connect } from 'react-redux';
import Header from '../components/Header';
import {
  setCurrentUser
} from '../actions/authentication';
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
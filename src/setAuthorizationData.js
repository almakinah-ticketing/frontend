import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authentication';

// If user logged in, set default authorization header in all axios requests and save logged in user data across app
export default function(store) {
  if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
  } else {
    setAuthorizationToken();
    store.dispatch(setCurrentUser({}));
  }
}
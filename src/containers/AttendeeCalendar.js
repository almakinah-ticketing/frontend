import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser
  }
}

export default connect(mapStateToProps)(Calendar);
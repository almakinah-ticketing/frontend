import { connect } from 'react-redux';
import AdminDashboard from '../pages/AdminDashboard';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser
  }
}

export default connect(mapStateToProps)(AdminDashboard);
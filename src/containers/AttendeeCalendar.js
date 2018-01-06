import { connect } from 'react-redux';
import AttendeeCalendar from '../pages/AttendeeCalendar';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser
  }
}

export default connect(mapStateToProps)(AttendeeCalendar);
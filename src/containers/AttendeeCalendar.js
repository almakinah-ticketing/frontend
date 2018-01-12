import { connect } from 'react-redux';
import AttendeeCalendar from '../pages/AttendeeCalendar';
import { handleNewSearchInput } from '../actions/events';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNewSearchInput: (searchInput) => {
      dispatch(handleNewSearchInput(searchInput));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeCalendar);
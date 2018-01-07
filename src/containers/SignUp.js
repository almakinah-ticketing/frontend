import { connect } from 'react-redux';
import SignUp from '../pages/SignUp';
import {
  postNewAttendeeLoading, postNewAttendee, postNewAttendeeSuccess, postNewAttendeeFailure
} from '../actions/attendees';
import history from '../history';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    attendee: store.attendee.attendee,
    loading: store.attendee.loading,
    error: store.attendee.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postNewAttendeeLoading: () => {
      dispatch(postNewAttendeeLoading());
    },
    postNewAttendee: (attendee) => {
      dispatch(postNewAttendee(attendee)).then(response => {
        if (response.payload.status<400) {
          dispatch(postNewAttendeeSuccess(response.payload.data));
          history.push('/login', {email: response.payload.data.email});
        } else {
          dispatch(postNewAttendeeFailure(response.payload.response.data));
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
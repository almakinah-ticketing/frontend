import { connect } from 'react-redux';
import SignUp from '../pages/SignUp';
import {
  postNewAttendeeLoading, postNewAttendee, postNewAttendeeSuccess, postNewAttendeeFailure
} from '../actions/attendee';

const mapStateToProps = (store) => {
  return {
    attendee: store.attendee.attendee,
    loading: store.attendee.loading,
    error: store.attendee.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postNewAttendee: (attendee) => {
      dispatch(postNewAttendeeLoading());
      dispatch(postNewAttendee(attendee)).then(response => {
        if (response.payload.status<400) {
          dispatch(postNewAttendeeSuccess(response.payload.data));
        } else {
          dispatch(postNewAttendeeFailure(response.payload.response.data));
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
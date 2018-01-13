import { connect } from 'react-redux';
import SignUp from '../pages/SignUp';
import {
  postNewAttendeeLoading, postNewAttendee, postNewAttendeeSuccess, postNewAttendeeFailure
} from '../actions/attendees';
import { handleNewSearchInput } from '../actions/events';
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
          if (response.payload.response.status === 422) {
            dispatch(postNewAttendeeFailure(response.payload.response.data));
          } else {
            dispatch(postNewAttendeeFailure("Oops, something went wrong!"));
          }
        }
      });
    },
    handleNewSearchInput: (searchInput) => {
      dispatch(handleNewSearchInput(searchInput));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
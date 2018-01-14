import { connect } from 'react-redux';
import { handleNewSearchInput } from '../actions/events';
import AttendeeCalendarPage from '../pages/AttendeeCalendar';
import CalendarComponent from '../components/Calendar';
import {getCalendarLoading, getCalendar, getCalendarSuccess, getCalendarFailure} from '../actions/calendar';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    calendar: store.calendar.calendar,
    loading: store.calendar.loading,
    error: store.calendar.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCalendar: () => {
      dispatch(getCalendarLoading());
      dispatch(getCalendar()).then(response => {
        if (response.payload.status<400) {
          dispatch(getCalendarSuccess(response.payload.data));
        } else {
          dispatch(getCalendarFailure(response.payload.message));
        }
      });
    },
    handleNewSearchInput: (searchInput) => {
      dispatch(handleNewSearchInput(searchInput));
    }
  }
}

export const AttendeeCalendar = connect(mapStateToProps, mapDispatchToProps)(AttendeeCalendarPage);
export const Calendar = connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);

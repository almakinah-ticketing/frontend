import React, {Component} from 'react';

class AttendeeCalendar extends Component {
  render() {
    const { currentUser } = this.props;
    return(
      <div className="attendee-calendar">
        <h2>AttendeeCalendar</h2>
        <p>Welcome, {currentUser.f_name}</p>
      </div>
      );
  }
}

export default AttendeeCalendar;
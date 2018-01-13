import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '../../containers/AttendeeCalendar';


class AttendeeCalendar extends Component {
  render() {
    const { currentUser } = this.props;
    return(
      <div className="attendee-calendar">
        <h2>AttendeeCalendar</h2>
        <p>Welcome, {currentUser.f_name}</p>
        <p>Here is an overview of your Calendar</p>
        <Calendar/>
       </div>
       
      );
  }
}

export default AttendeeCalendar;




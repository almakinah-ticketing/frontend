import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CApp from '../../components/App/App';

class AttendeeCalendar extends Component {
  render() {
    const { currentUser } = this.props;
    return(
      <div className="attendee-calendar">
        <h2>AttendeeCalendar</h2>
        <p>Welcome, {currentUser.f_name}</p>
        <p>Here is an overview of your Calendar</p>
      <CApp /></div>
       
      );
  }
}

export default AttendeeCalendar;




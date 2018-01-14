import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '../../containers/AttendeeCalendar';


class AttendeeCalendar extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }
  
  render() {
    const { currentUser } = this.props;
    return(
      <div className="attendee-calendar page">
        <h2>Welcome, {currentUser.f_name}</h2>
        <p>Here is an overview of your calendar</p>
        <Calendar />
       </div>
      );
  }
}

export default AttendeeCalendar;




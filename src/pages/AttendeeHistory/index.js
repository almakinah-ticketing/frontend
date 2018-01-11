import React, {Component} from 'react';
import { History } from '../../containers/AttendeeHistory';

class AttendeeHistory extends Component {
  render() {
    return(
      <div className="attendee-calendar">
        <h2>AttendeeHistory</h2>
        <p>You bought tickets to the following:</p>
        <History/>
      </div>
      );
  }
}

export default AttendeeHistory;
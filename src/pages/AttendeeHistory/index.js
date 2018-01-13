import React, {Component} from 'react';
import { History } from '../../containers/AttendeeHistory';

class AttendeeHistory extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }
  
  render() {
    return(
      <div className="attendee-calendar page">
        <h2>Tickets you bought:</h2>
        <History/>
      </div>
      );
  }
}

export default AttendeeHistory;
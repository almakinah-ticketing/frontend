import React, {Component} from 'react';
import { History } from '../../containers/AttendeeHistory';

class AttendeeHistory extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }
  
  render() {
    return(
      <div className="attendee-history container-fluid page">
        <h2>Tickets you bought</h2>
        <History />
      </div>
      );
  }
}

export default AttendeeHistory;
import React, {Component} from 'react';
import { History } from '../../containers/AttendeeHistory';

class AttendeeHistory extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }
  
  render() {
    return(
      <div class="card" class="container-fluid">
        <h2>Tickets you bought:</h2>
        <p>You bought tickets to the following:</p>
        <History/>
      </div>
      );
  }
}

export default AttendeeHistory;
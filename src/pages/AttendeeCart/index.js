import React, {Component} from 'react';

class AttendeeCart extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }
  
  render() {
    return(
      <div className="attendee-calendar">
        <h2>AttendeeCart</h2>
      </div>
      );
  }
}

export default AttendeeCart;
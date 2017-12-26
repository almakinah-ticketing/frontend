import React, { Component } from 'react';
import Event from '../Event';

class Events extends Component {
  componentWillMount() {
    const {
      getEvents
    } = this.props;
    getEvents();
  }

  render() {
    const {
      events, 
      loading, 
      error
    } = this.props;
    return (
      <div className="all-events-list">
        {
          events.map((event) => {
            return (
              <Event event={event} />
              );
          })
        }
      </div>
      );
  }
}

export default Events;
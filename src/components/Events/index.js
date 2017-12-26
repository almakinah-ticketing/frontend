import React, { Component } from 'react';
import Event from '../Event';

class Events extends Component {
  componentWillMount(){
    const {
      getEvents
    } = this.props;
    getEvents();
  }

  render() {
    const {
      events,
      eventsLoading,
      eventsError,
      getEvents,
      _filterByCategory
    } = this.props;
    return (
      <div className="all-events-list">
        <h1>Events</h1>
        { 
          (eventsLoading)
          ? <p className="loading-message">Loading events...</p>
          : (eventsError)
            ? <p className="error-message">Oops, something went wrong!</p>
            : 
              events.map((event) => {
                return (
                  <Event event={event}  getEvents={getEvents} _filterByCategory={_filterByCategory} />
                  );
          })
        }
      </div>
      );
  }
}

export default Events;
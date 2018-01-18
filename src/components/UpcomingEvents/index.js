import React, { Component } from 'react';
import Event from '../Event';
import '../Events/Events.css';
import { Link } from 'react-router-dom';

export default class UpcomingEvents extends Component{
  constructor(props) {
    super(props);
    this._upcomingEvents = this._upcomingEvents.bind(this);
  }

  _upcomingEvents() {
    const { events } = this.props;
    var upcomingEvents = events.filter(event => new Date(event.data.start_datetime) >= new Date());
    return upcomingEvents;
  }

  render(){
    const {events, loading, error, _filterEvents, currentUser, isAuthenticated} = this.props;
    return (
      <div className="upcoming-events">
        <h3>Upcoming events</h3>
        {
          (this._upcomingEvents().length === 0)
          ? (loading)
            ? <p className="loading-message">Loading upcoming events...</p>
            : (error)
            ? <p className="error-message">Oops, something went wrong!</p>
            : <p className="no-events-yet-message">No events yet</p>
          :
          this._upcomingEvents().map((event, index) => {
            return (
              <div>
              {
                index < 3? <Event event={event} currentUser={currentUser} isAuthenticated={isAuthenticated} _filterEvents={_filterEvents} source="upcomingEvents" /> : false
              }
              </div>
            );
          })
        }
      <p><Link to="/events" className="see-all">See all events</Link> </p> 
      </div>
    )
  }
}


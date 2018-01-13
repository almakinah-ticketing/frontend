import React, { Component } from 'react';
import Event from '../Event';
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
    const {events, loading, error, _filterEvents} = this.props;
    return (
      <div>
        <h3>Upcoming events</h3>
        {
          (this._upcomingEvents().length === 0)
          ? (loading)
            ? <p className="loading-message">Loading upcoming events...</p>
            : (error)
            ? <p className="error-message">Oops, something went wrong!</p>
            : null
          :
          this._upcomingEvents().map((event, index) => {
            return (
              <div>
              {
                index < 3? <Event event={event} _filterEvents={_filterEvents} source="upcomingEvents" /> : false
              }
              </div>
            );
          })
        } 

      <p> <Link to="/events">See all events</Link> </p> 
      </div>
    )
  }
}


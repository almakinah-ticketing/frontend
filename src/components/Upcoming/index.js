import React, { Component } from 'react';
import Event from '../Event';
import { Link } from 'react-router-dom';


export default class Upcoming extends Component{
  componentWillMount(){
    this.props.getEvents({});
  }

  render(){
    const {events, loading, error, _filterEvents} = this.props;

     return (
      <div>
        <h2>Upcoming events</h2>
       
        {
          (events.length === 0)
          ? (loading)
            ? <p className="loading-message">Loading events...</p>
            : (error)
            ? <p className="error-message">Oops, something went wrong!</p>
            : null
          :
          events.map((event, index) => {
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


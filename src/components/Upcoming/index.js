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

      <p> <Link to="/events">Show All Events</Link> </p> 
      </div>
    )
  }
}


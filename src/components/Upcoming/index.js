import React, { Component } from 'react';
import Event from '../Event';
import { Link } from 'react-router-dom';


export default class Upcoming extends Component{
  componentWillMount(){
    this.props.getEvents();
  }

  render(){
    const {events, loading, error} = this.props;

     return (
      <div>
        <h1>Upcoming Events</h1>
       
        {
          events.map((event, index) => {
            return (
              <div>
                 {
                    index < 3? <Event event={event} source="upcomingEvents" /> : false
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


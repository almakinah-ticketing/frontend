import React, { Component } from 'react';
import Event from '../Event';
import {NavLink} from 'react-router-dom';


export default class Upcoming extends Component{
  componentWillMount(){
    this.props.getEvents();
  }

  render(){
    const {events, loading, error} = this.props;

     return (
      <div>
        <h1>UpComing Events</h1>
       
        {
          events.map((event, index) => {
            return (
              <div>
                 {
                    index < 3? <Event event={event}/> : false
                  }
            
              </div>
            );
          })
        } 

      <p> <NavLink to="/events">Show All Events</NavLink> </p> 
      </div>
    )
  }
}


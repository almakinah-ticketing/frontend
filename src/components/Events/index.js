import React, { Component } from 'react';
import Event from '../Event';

class Events extends Component {
  // Checking route to determine whether to render all or filtered events when component mounts
  componentWillMount() {
    const {
      getEvents
    } = this.props;    
    if (this.props.location.search === '') {
      getEvents();
    } else {
      var searchArray = this.props.location.search.split('?');
      var queryParamsString = searchArray[1];
      var queryParamsObject = new URLSearchParams(queryParamsString);
      var categoryId = queryParamsObject.get("categoryId");
      if (this.props.location.search === `?categoryId=${categoryId}`) {
        getEvents(categoryId);
      }
    }
  }

  // Checking route to determine whether to render all or filtered events when component updates
  componentWillReceiveProps(nextProps) {
    const {
      getEvents
    } = this.props;
    if (this.props.location.search !== nextProps.location.search) {
      if (nextProps.location.search === '') {
        getEvents();
      } else {
        var searchArray = nextProps.location.search.split('?');
        var queryParamsString = searchArray[1];
        var queryParamsObject = new URLSearchParams(queryParamsString);
        var categoryId = queryParamsObject.get("categoryId");
        if (nextProps.location.search === `?categoryId=${categoryId}`) {
          getEvents(categoryId);
        }
      }
    }
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
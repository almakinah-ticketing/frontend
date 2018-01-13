import React, { Component } from 'react';
import Event from '../Event';
import './Events.css';

class Events extends Component {
  constructor(props) {
    super(props);
    this._noSearchResults = this._noSearchResults.bind(this);
  }

  // Checking route to determine whether to render all or filtered events when component mounts
  componentWillMount() {
    const {
      getEvents,
      handleNewSearchInput
    } = this.props;  
    if (this.props.location.search === '') {
      getEvents({});
      handleNewSearchInput('');
    } else {
      var searchArray = this.props.location.search.split('?');
      var queryParamsString = searchArray[1];
      var queryParamsObject = new URLSearchParams(queryParamsString);
      var categoryId = queryParamsObject.get("categoryId"); 
      var date = queryParamsObject.get("date"); 
      var title = queryParamsObject.get("title"); 
      if (categoryId && date) {
        getEvents({categoryId: categoryId, date: date});
        handleNewSearchInput('');
      } else if (categoryId) {
        getEvents({categoryId: categoryId});
        handleNewSearchInput('');
      } else if (date) {
        getEvents({date: date});
        handleNewSearchInput('');
      } else if (title) {
        getEvents({title: title});
        handleNewSearchInput(title);
      }
    }
  }

  // Checking route to determine whether to render all or filtered events when component updates
  componentWillReceiveProps(nextProps) {
    const {
      getEvents,
      handleNewSearchInput
    } = this.props;
    if (this.props.location.search !== nextProps.location.search) {
      if (nextProps.location.search === '') {
        getEvents({});
        handleNewSearchInput('');
      } else {
        var searchArray = nextProps.location.search.split('?');
        var queryParamsString = searchArray[1];
        var queryParamsObject = new URLSearchParams(queryParamsString);
        var categoryId = queryParamsObject.get("categoryId");
        var date = queryParamsObject.get("date"); 
        var title = queryParamsObject.get("title");
        if (categoryId && date) {
          getEvents({categoryId: categoryId, date: date});
          handleNewSearchInput('');
        } else if (categoryId) {
          getEvents({categoryId: categoryId});
          handleNewSearchInput('');
        } else if (date) {
          getEvents({date: date});
          handleNewSearchInput('');
        } else if (title) {
          getEvents({title: title});
          handleNewSearchInput(title);
        }
        // if (nextProps.location.search === `?categoryId=${categoryId}`) {
        //   getEvents(categoryId);
        // }
      }
    }
  }

  _noSearchResults() {
    var searchArray = this.props.location.search.split('?');
    var queryParamsString = searchArray[1];
    var queryParamsObject = new URLSearchParams(queryParamsString);
    var title = queryParamsObject.get("title"); 
    return (<p className="no-search-results-message">No results match "{title}"</p>);
  }

  render() {
    const {
      events,
      eventsLoading,
      eventsError,
      getEvents,
      _filterEvents
    } = this.props;
    var searchArray = this.props.location.search.split('?');
    var queryParamsString = searchArray[1];
    var queryParamsObject = new URLSearchParams(queryParamsString);
    var title = queryParamsObject.get("title");
    return (
      <div className="events">
        <h2>Events</h2>
        { 
          (events.length === 0)
          ? (eventsLoading && title)
            ? <p className="search-message">Searching for "{title}"</p>
            : (eventsLoading)
              ? <p className="loading-message">Loading events...</p>  
              : (eventsError)
                ? <p className="error-message">Oops, something went wrong!</p>
                : this._noSearchResults()
          : 
              events.map((event) => {
                if (new Date(event.data.start_datetime) >= new Date() && this.props.location.search === '') {
                  return (
                    <Event event={event}  getEvents={getEvents} source="events" _filterEvents={_filterEvents} />
                    );
                } else if (this.props.location.search) {
                  return (
                    <Event event={event}  getEvents={getEvents} source="events" _filterEvents={_filterEvents} />
                    );
                }
          })
        }
      </div>
      );
  }
}

export default Events;
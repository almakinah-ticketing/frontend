import React, { Component } from 'react';
import './EventsList.css';
import FilterForm from '../../components/FilterForm';
import Events from '../../components/Events';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this._filterEvents = this._filterEvents.bind(this);
  }

  // returns route with filtered data depending on query params to use in <Link>s
  _filterEvents(params) {
    var route;
    // function _parseDateToDatabase(newDate) {
    //   const dateObject = new Date(newDate);
    //   const year = dateObject.getFullYear();
    //   const month = dateObject.getMonth() + 1;
    //   const day = dateObject.getDate();
    //   const date = `${year}-${month}-${day}`;
    //   return date;
    // }
     if (params.categoryId && params.categoryId !== '0' && params.date) {
      route = `/events?categoryId=${params.categoryId}&date=${params.date}`;
    } else if (params.categoryId && params.categoryId !== '0') {
      route = `/events?categoryId=${params.categoryId}`;
    } else if (params.date) {
      // var parsedDate = _parseDateToDatabase(params.date);
      route = `/events?date=${params.date}`;
    } else {
      route = `/events`;
    }
    return route;
  }

  render() {
    const {
      categories,
      events,
      eventsLoading,
      eventsError,
      getCategories,
      getEvents,
      location
    } = this.props;
    return(
      <div className="EventsList">
        <FilterForm categories={categories} events={events} getCategories={getCategories} getEvents={getEvents} location={location} _filterEvents={this._filterEvents} />
        <Events events={events} getEvents={getEvents} eventsLoading={eventsLoading} eventsError={eventsError} location={location} _filterEvents={this._filterEvents} />
      </div>
      );
  }
}

export default EventsList;
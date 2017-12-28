import React, { Component } from 'react';
import './EventsList.css';
import SearchForm from '../../components/SearchForm';
import FilterForm from '../../components/FilterForm';
import Events from '../../components/Events';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this._filterEvents = this._filterEvents.bind(this);
  }

  _filterEvents(categoryId, date) {
    var route;
     if (categoryId && categoryId !== '0' && date) {
      route = `/events?categoryId=${categoryId}&date=${date}`;
    } else if (categoryId && categoryId !== 0) {
      route = `/events?categoryId=${categoryId}`;
    } else if (date) {
      route = `/events?date=${date}`;
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
        <SearchForm />
        <FilterForm categories={categories} events={events} getCategories={getCategories} getEvents={getEvents} location={location} _filterEvents={this._filterEvents} />
        <Events events={events} getEvents={getEvents} eventsLoading={eventsLoading} eventsError={eventsError} location={location} _filterEvents={this._filterEvents} />
      </div>
      );
  }
}

export default EventsList;
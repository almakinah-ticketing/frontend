import React, { Component } from 'react';
import './EventsList.css';
import SearchForm from '../../components/SearchForm';
import FilterForm from '../../components/FilterForm';
import Events from '../../components/Events';

class EventsList extends Component {
  constructor(props) {
    super(props);
    // this._filterEvents = this._filterEvents.bind(this);
  }

  // _filterEvents(categoryId, date) {
  //   const {
  //     getEvents
  //   } = this.props;
  //   if (categoryId === '0' && date === new Date()) {
  //     getEvents();
  //   } else if (categoryId !== '0' && date === new Date()) {
  //     getEvents(categoryId);
  //   } else if (categoryId === '0' && date !== new Date()) {
  //     getEvents(date);
  //   } else if (categoryId !== '0' && date !== new Date()) {
  //     getEvents(categoryId, date);
  //   }
  // }

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
        <FilterForm categories={categories} events={events} getCategories={getCategories} getEvents={getEvents} location={location} />
        <Events events={events} getEvents={getEvents} eventsLoading={eventsLoading} eventsError={eventsError} location={location} />
      </div>
      );
  }
}

export default EventsList;
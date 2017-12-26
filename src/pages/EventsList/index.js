import React, { Component } from 'react';
import './EventsList.css';
import SearchForm from '../../components/SearchForm';
import FilterForm from '../../components/FilterForm';
import Events from '../../components/Events';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this._filterByCategory = this._filterByCategory.bind(this);
  }

  _filterByCategory(categoryId) {
    const {
      getEvents
    } = this.props;
    if (categoryId === 0 || categoryId === null) {
      getEvents();
    } else {
      // getCategoryEvents(categoryId);
      getEvents(categoryId);
    }
  }

  render() {
    const {
      categories,
      events,
      eventsLoading,
      eventsError,
      getCategories,
      getEvents
    } = this.props;
    return(
      <div className="EventsList">
        <SearchForm />
        <FilterForm categories={categories} events={events} getCategories={getCategories} getEvents={getEvents} _filterByCategory={this._filterByCategory} />
        <Events events={events} getEvents={getEvents} eventsLoading={eventsLoading} eventsError={eventsError} _filterByCategory={this._filterByCategory} />
      </div>
      );
  }
}

export default EventsList;
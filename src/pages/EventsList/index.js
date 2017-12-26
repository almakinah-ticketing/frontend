import React, { Component } from 'react';
import './EventsList.css';
import SearchForm from '../../components/SearchForm';
import { FilterForm } from '../../containers/Categories';
import { Events } from '../../containers/Events';

class EventsList extends Component {
  render() {
    return(
      <div className="EventsList">
        <SearchForm />
        <FilterForm />
        <Events />
      </div>
      );
  }
}

export default EventsList;
import React, { Component } from 'react';
import './EventsList.css';
import SearchForm from '../../components/SearchForm';
import FilterForm from '../../components/FilterForm';

class EventsList extends Component {
  componentWillMount(){
    this.props.getCategories();
  }

  render() {
    const {
      categories, 
      loading, 
      error
    } = this.props;
    return(
      <div className="EventsList">
      <SearchForm />
      <FilterForm categories={categories} />
        <div className="all-events-list">
          AllEventsList
        </div>
      </div>
      );
  }
}

export default EventsList;
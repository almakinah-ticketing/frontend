import React, { Component } from 'react';

class FilterForm extends Component {
  _parseDate(newDate) {
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const date = `${year}-${month}-${day}`;
    return date;
  }

  componentWillMount(){
    const {
      getCategories
    } = this.props;
    getCategories();
  }

  render() {
    /* Add name and value attributes and related validations, props, and onChange and onClick event handlers */
    const {
      categories, 
      loading, 
      error
    } = this.props;
    return(
      <form className="filter-events-form">
        <input type="checkbox" id="filter-events-category" className="filter-events-checkbox" name="filter-events-filters" />
        <label className="filter-events-label" for="filter-events-category">Category</label>
        <select id="filter-events-category" className="filter-events-select">
          <option>All Categories</option>
          {categories.map((category) => {
            return (
              <option>{category.name}</option>
              );
            })
          }
        </select>
        <input type="checkbox" id="filter-events-date" className="filter-events-checkbox" name="filter-events-filters" />
        <label className="filter-events-label" for="filter-events-date">Date</label>
        <input type="date" id="filter-events-date" className="filter-events-date" value={this._parseDate(new Date())} />
        <button type="button" className="filter-events-submit">Filter</button>
      </form>
    );
  }
}

export default FilterForm;
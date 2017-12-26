import React, { Component } from 'react';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: null
    }
    this._handleChange = this._handleChange.bind(this);
  }

  _parseDate(newDate) {
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const date = `${year}-${month}-${day}`;
    return date;
  }

  _handleChange(event) {
    this.setState({[event.target.name]: Number(event.target.value)});
  }

  componentWillMount() {
    const {
      getCategories
    } = this.props;
    getCategories();
  }

  render() {
    /* Add name and value attributes and related validations, props, and onChange and onClick event handlers */
    const {
      categories,
      events,
      _filterByCategory
    } = this.props;
    return(
      <form className="filter-events-form">
        <input type="checkbox" id="filter-events-category" className="filter-events-checkbox" name="filter-events-filters" />
        <label className="filter-events-label" htmlFor="filter-events-category">Category</label>
        <select id="filter-events-category" className="filter-events-select" name="categoryId" onChange={this._handleChange}>
          <option value="0">All Categories</option>
          {categories.map((category) => {
            return (
              <option value={category.id}>{category.name}</option>
              );
            })
          }
        </select>
        <input type="checkbox" id="filter-events-date" className="filter-events-checkbox" name="filter-events-filters" />
        <label className="filter-events-label" htmlFor="filter-events-date">Date</label>
        <input type="date" id="filter-events-date" className="filter-events-date" value={this._parseDate(new Date())} />
        <button type="button" className="filter-events-submit" onClick={() => {_filterByCategory(this.state.categoryId)}}>Filter</button>
      </form>
    );
  }
}

export default FilterForm;
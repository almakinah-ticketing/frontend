import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 0
    }
    this._parseDate = this._parseDate.bind(this);
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

  // set value of select dropdown to null/all categories if there are no query params
    if (this.props.location.search === '') {
      this.setState({categoryId: 0});
    } else {
      var searchArray = this.props.location.search.split('?');
      var queryParamsString = searchArray[1];
      var queryParamsObject = new URLSearchParams(queryParamsString);
      var categoryId = queryParamsObject.get("categoryId");
      if (this.props.location.search === `?categoryId=${categoryId}`) {
        this.setState({categoryId: categoryId});
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    // set value of select dropdown to null/all categories if there are no query params
    if (nextProps.location.search === '') {
      this.setState({categoryId: 0});
    } else {
      var searchArray = nextProps.location.search.split('?');
      var queryParamsString = searchArray[1];
      var queryParamsObject = new URLSearchParams(queryParamsString);
      var categoryId = queryParamsObject.get("categoryId");
      if (nextProps.location.search === `?categoryId=${categoryId}`) {
        this.setState({categoryId: categoryId});
      }
    }
  }

  render() { 
    /* Add filter by date functionality */
    const {
      categories,
      _filterByCategory
    } = this.props;
    return(
      <form className="filter-events-form">
        <input type="checkbox" id="filter-events-category" className="filter-events-checkbox" name="filter-events-filters" />
        <label className="filter-events-label" htmlFor="filter-events-category">Category</label>
        <select id="filter-events-category" className="filter-events-select" name="categoryId" value={this.state.categoryId} onChange={this._handleChange}>
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
        <button type="button" className="filter-events-submit" onClick={() => {_filterByCategory(this.state.categoryId)}}><Link to={(this.state.categoryId === 0) ? '/events' : `/events?categoryId=${this.state.categoryId}`}>Filter</Link></button>
      </form>
    );
  }
}

export default FilterForm;
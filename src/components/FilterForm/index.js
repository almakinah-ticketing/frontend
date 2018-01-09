import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '0',
      date: ''
    }
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value});
  }

  componentWillMount() {
    const {
      getCategories
    } = this.props;
    getCategories();

    // set value of select dropdown to '0'/all categories and value of date to '' if there are no query params
    if (this.props.location.search === '') {
      this.setState({categoryId: '0', date: ''});
    } else {
      var searchArray = this.props.location.search.split('?');
      var queryParamsString = searchArray[1];
      var queryParamsObject = new URLSearchParams(queryParamsString);
      var categoryId = queryParamsObject.get("categoryId");
      var date = queryParamsObject.get("date");
      if (this.props.location.search === `?categoryId=${categoryId}&date=${date}`) {
        this.setState({categoryId: categoryId, date: date});
      } else if (this.props.location.search === `?categoryId=${categoryId}`) {
        this.setState({categoryId: categoryId, date: ''});
      } else if (this.props.location.search === `?date=${date}`) {
        this.setState({date: date, categoryId: '0'});
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    // set value of select dropdown to '0'/all categories and value of date to '' if there are no query params
    if (nextProps.location.search === '') {
      this.setState({categoryId: '0', date: ''});
    } else {
      var searchArray = nextProps.location.search.split('?');
      var queryParamsString = searchArray[1];
      var queryParamsObject = new URLSearchParams(queryParamsString);
      var categoryId = queryParamsObject.get("categoryId");
      var date = queryParamsObject.get("date");
      if (nextProps.location.search === `?categoryId=${categoryId}&date=${date}`) {
        this.setState({categoryId: categoryId, date: date});
      } else if (nextProps.location.search === `?categoryId=${categoryId}`) {
        this.setState({categoryId: categoryId, date: ''});
      } else if (nextProps.location.search === `?date=${date}`) {
        this.setState({date: date, categoryId: '0'});
      }
    }
  }

  render() { 
    const {
      categories,
      _filterEvents
    } = this.props;
    return(
      <form className="filter-events-form">
        <input type="checkbox" id="filter-events-category-checkbox" className="filter-events-checkbox" name="filter-events-filters" />
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
        <input type="checkbox" id="filter-events-date-checkbox" className="filter-events-checkbox" name="filter-events-filters" />
        <label className="filter-events-label" htmlFor="filter-events-date">Date</label>
        <input type="date" id="filter-events-date" className="filter-events-date" name="date" value={this.state.date} onChange={this._handleChange} />
        <button type="button" className="filter-events-submit btn btn-default"><Link to={_filterEvents({categoryId: this.state.categoryId, date: this.state.date})}>Filter</Link></button>
      </form>
    );
  }
}

export default FilterForm;
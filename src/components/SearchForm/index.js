import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._submitSearchData = this._submitSearchData.bind(this);
  }

  _handleChange(event) {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput(event.target.value);
  }

  _submitSearchData(event) {
    event.preventDefault();
    const { getEvents, searchInput } = this.props;
    console.log(this.props);
    getEvents({title: searchInput});
  }

  render() {
    const { searchInput } = this.props;
    return(
      <form className="search-events-form" onSubmit={this._submitSearchData}>
        <input type="text" id="search-events-input" className="" placeholder="Search events by title..." minLength="1" maxLength="280" required name="title" value={searchInput} onChange={this._handleChange} />
        <label className="sr-only" htmlFor="search-events-input">Search events by title...</label>
        <button type="submit" className="search-events-submit"><Link to={`/events?title=${searchInput}`}><i class="fa fa-search" aria-hidden="true"></i></Link></button>
      </form>
      );
  }
}

export default SearchForm;
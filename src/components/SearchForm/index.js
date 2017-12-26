import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return(
      <form className="search-events-form">
      {/* Add name and value attributes and related validations, props, and onChange and onClick event handlers when implementing seach */}
        <input type="text" id="search-events-input" className="search-events-input" placeholder="Search events..." />
        <label className="sr-only" for="search-events-input">Search events...</label>
        <button type="button" className="search-events-submit"><i class="fa fa-search" aria-hidden="true"></i></button>
      </form>
      );
  }
}

export default SearchForm;
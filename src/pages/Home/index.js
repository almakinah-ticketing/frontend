import React, { Component } from 'react';
import './Home.css';
import { Categories } from '../../containers/Categories';
import HotestEvent from '../../containers/HotestEvent';
import { Upcoming } from '../../containers/UpcomingEvents';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this._filterEvents = this._filterEvents.bind(this);
  }

    // returns route with filtered data depending on query params to use in <Link>s
  _filterEvents(params) {
    var route;
    function _parseDate(newDate) {
      const dateObject = new Date(newDate);
      const year = dateObject.getFullYear();
      const month = dateObject.getMonth() + 1;
      const day = dateObject.getDate();
      const date = `${year}-${month}-${day}`;
      return date;
    }
     if (params.categoryId && params.categoryId !== '0' && params.date) {
      route = `/events?categoryId=${params.categoryId}&date=${params.date}`;
    } else if (params.categoryId && params.categoryId !== '0') {
      route = `/events?categoryId=${params.categoryId}`;
    } else if (params.date) {
      var parsedDate = _parseDate(params.date);
      route = `/events?date=${parsedDate}`;
    } else {
      route = `/events`;
    }
    return route;
  }

  render() {
    return(
      <div className="Home">
        <h1 className="App-title"><Link to="/">AlMakinah Summit</Link></h1>
        <Link to="/"><img className="logo" src="logo.png" alt="Logo"/></Link>
        <HotestEvent _filterEvents={this._filterEvents} />
        <Upcoming _filterEvents={this._filterEvents} />
        <Categories _filterEvents={this._filterEvents} />
      </div>
    );
  }
}

export default Home;
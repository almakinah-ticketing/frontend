import React, { Component } from 'react';
import './Home.css';
import { Categories } from '../../containers/Categories';
import HotestEvent from '../../components/HotestEvent';
import UpcomingEvents from '../../components/UpcomingEvents';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this._filterEvents = this._filterEvents.bind(this);
  }

  componentWillMount() {
    const { getEvents, handleNewSearchInput } = this.props;
    getEvents({});
    handleNewSearchInput('');
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
    const { events, loading, error, currentUser, isAuthenticated } = this.props;
    console.log('PROPS', this.props);
    return(
      <div className="home">
        <div className="splash">
          <div className="splash-content">
            <h1 className="App-title"><Link to="/">AlMakinah Summit</Link></h1>
          </div>
        </div>
        <div className="home-container page">
          <HotestEvent _filterEvents={this._filterEvents} events={events} loading={loading} error={error} currentUser={currentUser} isAuthenticated={isAuthenticated} />
          <UpcomingEvents _filterEvents={this._filterEvents} events={events} loading={loading} error={error} currentUser={currentUser} isAuthenticated={isAuthenticated} />
          <Categories _filterEvents={this._filterEvents} />
        </div>
      </div>
    );
  }
}

export default Home;
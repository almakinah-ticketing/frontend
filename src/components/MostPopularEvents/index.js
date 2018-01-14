import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Event from '../Event';

class MostPopularEvents extends Component {
  constructor(props) {
    super(props);
    this._filterEvents.bind(this);
  }

  componentWillMount() {
    const { getEvents } = this.props;
    getEvents({popularity: 'desc'});
  }

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
    const { events, loading, error } = this.props;
    return(
      <div className="most-popular-events col-sm-9 col-md-9 col-lg-9 col-xl-9 container">
        <h3>Your three most popular events are:</h3>
        <div className="three-most-popular row card-deck">
        {
          (events.length === 0) 
          ? (loading)
            ? <p className="loading-message">Loading your most popular events...</p>
            : (error)
            ? <p className="error-message">Oops, something went wrong!</p>
            : null
          : events.map((event, index) => {
            if (index < 3) {
              return (
              <Event event={event} source={"most-popular-events"} _filterEvents={this._filterEvents} />
              );
            } else {
              return (
                null
                );
            }
          })
        }
        </div>
        {
          (events.length !== 0) 
          ? <Link to="/events" className="see-all pull-start">See all events</Link>
          : null
        }
      </div>
      );
  }
}

export default MostPopularEvents;
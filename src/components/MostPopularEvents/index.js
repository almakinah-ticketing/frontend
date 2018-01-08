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
    const { events } = this.props;
    console.log(events);
    return(
      <div className="most-popular-events container">
        <h3>Most popular events</h3>
        <div className="3-most-popular row">
        {
          events.map((event, index) => {
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
        <Link to="/events" className="pull-end">See all events</Link>
        <div className="row clearfix">
        </div>
      </div>
      );
  }
}

export default MostPopularEvents;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Event.css';

class Event extends Component {
  constructor(props) {
    super(props);
    this._parseDate = this._parseDate.bind(this);
    this._parseDuration = this._parseDuration.bind(this);
  }

  _parseDate(dateArg) {
    var dateNew = new Date(dateArg);
    var daysWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var dayWeek = daysWeek[dateNew.getDay()];
    var dayMonth = dateNew.getDate();
    var month = months[dateNew.getMonth()];
    var year = dateNew.getFullYear();
    var hours24 = dateNew.getHours();
    var hours = (hours24 >= 12) ? hours24 - 12 : `0${hours24}`;
    var minutes = dateNew.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    var amOrPm = (hours24 >= 12) ? 'pm' : 'am';
    var dateString = `${dayWeek} ${month} ${dayMonth} ${year} at ${hours}:${minutes} ${amOrPm}`;
    return dateString;
  }

  _parseDuration(endDatetime, startDatetime) {
    var endTime = (new Date(endDatetime)).getTime();
    var startTime = (new Date(startDatetime)).getTime();
    var durationMs = endTime - startTime;
    var durationS = durationMs / 1000;
    var durationHM = durationS / 3600;
    var durationM = Math.round((durationHM % 1) * 60);
    var durationH = Math.round(durationHM);
    var minutesWord;
    var hoursWord;
    if (durationM > 1) {
      minutesWord = 'minutes';
    } else {
      minutesWord = 'minute';
    }
    if (durationH > 1) {
      hoursWord = 'hours';
    } else {
      hoursWord = 'hour';
    }
    var durationString = `${(durationH !== 0) ? durationH : ''} ${(durationH !== 0) ? hoursWord : ''} ${(durationM !== 0) ? durationM : ''} ${(durationM !== 0) ? minutesWord : ''}`;
    return durationString;
  }

  render() {
    const {
      source,
      event,
      _filterEvents,
      loading,
      error
    } = this.props;
    console.log(this.props);
    if (source === 'events' || source === 'upcomingEvents') {
      return (
        <div className="event clearfix">
          {
            (new Date(event.start_datetime) < new Date()) 
            ? <p className="event-expired-message">Event has already happened</p>
            : (event.tickets_available === 0)
              ? <p className="event-sold-out-message">Sold out</p>
              : <span></span>
          }
          <Link to={`/events/${event.id}`}><img src={event.img} alt={event.title} className="event-img pull-start" /></Link>
          <div className="event-text-info pull-start">
            <h2><Link to={`/events/${event.id}`}>{event.title}</Link></h2>
            <Link to={_filterEvents({categoryId: event.category.id})}>#{event.category.name}</Link>
            <time dateTime={event.start_datetime}><Link to={_filterEvents({date: event.start_datetime})}>{this._parseDate(event.start_datetime)}</Link></time>
            <p>Duration: {this._parseDuration(event.end_datetime, event.start_datetime)}</p>
            <div className="overview">
              {
                JSON.parse(event.overview).map((line) => {
                  return(
                    <p className="overview-line">{line}</p>
                    );
                })
              }
            </div>
          </div>
        </div>
      );
    } else if (source === 'eventDetails') {
      if (Object.keys(event).length === 0) {
        if (loading) {
          return(
            <p className="loading-message">Loading event details...</p>
            );
        } else if (error) {
          return(
            <p className="error-message">Oops, something went wrong!</p>
            );
        } else {
          return (
            <span></span>
            );
        }
      } else {
        return(
          <div className="event-details container-fluid">
            <h1><Link to={`/events/${event.data.id}`} className="col-md-12">{event.data.title}</Link></h1>
            <Link to={`/events/${event.data.id}`}><img src={event.data.img} alt={event.data.title} className="event-img col-md-12" /></Link>
            <Link to={_filterEvents({categoryId: event.data.category_id})}>#{event.category}</Link>
            <p><span className="dataKeys col-md-4">When?</span><time dateTime={event.data.start_datetime} className="col-md-8"><Link to={_filterEvents({date: event.data.start_datetime})}>{this._parseDate(event.data.start_datetime)}</Link></time></p>
            <p><span className="dataKeys col-md-4">How long?</span>{this._parseDuration(event.data.end_datetime, event.data.start_datetime)}</p>
            <div className="overview">
              <span className="dataKeys col-md-4">What exactly?</span>
              {
                JSON.parse(event.data.overview).map((line) => {
                  return(
                    <p className="overview-line">{line}</p>
                    );
                })
              }
            </div>
            {/* add info on tickets remaining, sold out, etc.? */}
            <ul className="ticket-prices-per-type list-unstyled">
              {
                event.data.types.map((type) => {
                  return(
                    <li>
                      <span className="ticket-type-name">{type.name}</span>
                      <span className="ticket-type-price">EGP {type.price}</span>
                    </li>
                    );
                })
              }
            <div className="agenda">
              <span className="dataKeys col-md-4">What'll be happening?</span>
              {
                JSON.parse(event.data.agenda).map((line) => {
                  return(
                    <p className="agenda-line">{line}</p>
                    );
                })
              }
            </div>
            </ul>
            {
              (new Date(event.data.start_datetime) < new Date()) 
              ? <p className="event-expired-message">Event has already happened</p>
              : (event.tickets_available === 0)
                ? <p className="event-sold-out-message">Sold out</p>
                : <Link to={`/events/${event.data.id}/tickets`} className="btn btn-primary">Get Tickets Now</Link>
            }
        </div>
        );
      }
    }
  }
}

export default Event;

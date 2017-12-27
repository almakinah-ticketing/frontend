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
      hoursWord = 'minutes';
    }
    var durationString = `Duration: ${(durationH !== 0) ? durationH : ''} ${(durationH !== 0) ? hoursWord : ''} ${(durationM !== 0) ? durationM : ''} ${(durationM !== 0) ? minutesWord : ''}`;
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
    if (source === 'events' || source === 'upcomingEvents') {
      return (
        <div className="event clearfix">
          <Link to={`/events/${event.id}`}><img src={event.img} alt={event.title} className="event-img pull-start" /></Link>
          <div className="event-text-info pull-start">
            <Link to={`/events/${event.id}`}><h2>{event.title}</h2></Link>
            <Link to={`/events?categoryId=${event.category.id}`}>#{event.category.name}</Link>
            <time dateTime={event.start_datetime}>{this._parseDate(event.start_datetime)}</time>
            <p>{this._parseDuration(event.end_datetime, event.start_datetime)}</p>
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
          <div className="event-details">
            <Link to={`/events/${event.data.id}`}><h1>{event.data.title}</h1></Link>
            <Link to={`/events/${event.data.id}`}><img src={event.data.img} alt={event.data.title} className="event-img" /></Link>
            <Link to={`/events?categoryId=${event.data.category_id}`}>#{event.category}</Link>
            <p><span className="dataKeys">When?</span><time dateTime={event.data.start_datetime}>{this._parseDate(event.data.start_datetime)}</time></p>
            <p><span className="dataKeys">How long?</span>{this._parseDuration(event.data.end_datetime, event.data.start_datetime)}</p>
            <div className="overview">
              <span className="dataKeys">What exactly?</span>
              {
                JSON.parse(event.data.overview).map((line) => {
                  return(
                    <p className="overview-line">{line}</p>
                    );
                })
              }
            </div>
            {/* add info on tickets remaining, sold out, etc.? */}
            <ul className="ticket-prices-per-type">
              {
                event.data.types.map((type) => {
                  return(
                    <li>
                      <span className="ticket-type-name">{type.name}</span>
                      <span className="ticket-type-price">{type.price}</span>
                    </li>
                    );
                })
              }
            <div className="agenda">
              <span className="dataKeys">What'll be happening?</span>
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
              (event.tickets_available !== 0)
              ? <Link to={`/events/${event.data.id}/tickets`}>Get Tickets Now</Link>
              : <span></span>
            }
        </div>
        );
      }
    }
  }
}

export default Event;

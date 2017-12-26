import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Events from '../Events';
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
    const { 
      event
    } = this.props;
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
      event,
      categories,
      _filterByCategory
    } = this.props;
    return (
      <div className="event clearfix">
        <Link to={`/events/${event.id}`}><img src={event.img} alt={event.title} className="event-img pull-start" /></Link>
        <div className="event-text-info pull-start">
          <Link to={`/events/${event.id}`}><h2>{event.title}</h2></Link>
          {/* Get time and parse both date and time */}
          <time datetime={event.start_datetime}>{this._parseDate(event.start_datetime)}</time>
          <p>{this._parseDuration(event.end_datetime, event.start_datetime)}</p>
          {
            JSON.parse(event.overview).map((line) => {
              return(
                <p>{line}</p>
                );
            })
          }
          <form>
            <button type="button" onClick={() => {_filterByCategory(event.category.id)}}>#{event.category.name}</button>
          </form>
        </div>
      </div>
      );
  }
}

export default Event;
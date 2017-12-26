import React, { Component } from 'react';

class Event extends Component {
  _parseDuration(totalMinutes) {
    // parse code here
    return totalMinutes;
  }

  _parseOverview(stringArrayOfStrings) {
    console.log(stringArrayOfStrings.split(','));
  }

  render() {
    const {
      event
    } = this.props;
    return (
      <div className="event">
        <img src={event.img} alt={event.title} />
        <h2>{event.title}</h2>
        {/* Get time and parse both date and time */}
        <p>{event.event_date}</p>
        {/* Parse duration */}
        <p>{this._parseDuration(event.duration)}</p>
        {/* Parse overview -- way to maintain formatting? */}
        <p>{this._parseOverview(event.overview)}</p>
        {/* Replace category_id with category_name */}
        <p>{event.category_id}</p>
      </div>
      );
  }
}

export default Event;
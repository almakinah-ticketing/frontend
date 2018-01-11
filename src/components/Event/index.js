import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { rootApi } from '../../apiConfig';
import './Event.css';

class Event extends Component {
  constructor(props) {
    super(props);
    this._parseDateToDisplay = this._parseDateToDisplay.bind(this);
    this._parseTimeToDisplay = this._parseTimeToDisplay.bind(this);
    this._parseDuration = this._parseDuration.bind(this);
    this._linkContent = this._linkContent.bind(this);
    this._attendeeTicketCountMessage = this._attendeeTicketCountMessage.bind(this);
    this._adminDetailsTable = this._adminDetailsTable.bind(this);
    this._cancelEvent = this._cancelEvent.bind(this);
    this._uncancelEvent = this._uncancelEvent.bind(this);
  }

  _parseDateToDisplay(dateArg) {
    var dateNew = new Date(dateArg);
    var daysWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var dayWeek = daysWeek[dateNew.getDay()];
    var dayMonth = dateNew.getDate();
    var month = months[dateNew.getMonth()];
    var year = dateNew.getFullYear();
    var dateString = `${dayWeek} ${month} ${dayMonth} ${year}`;
    return dateString;
  }

  _parseTimeToDisplay(dateArg) {
    var dateNew = new Date(dateArg);
    var hours24 = dateNew.getHours();
    var hours;
    if (hours24 > 12) {
      hours = hours24 - 12;
    } else if (hours24 >= 10) {
      hours = hours24;
    } else if (hours24 < 10) {
      hours = `0${hours24}`;
    }
    var minutes = dateNew.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    var amOrPm = (hours24 >= 12) ? 'pm' : 'am';
    var timeString = `${hours}:${minutes} ${amOrPm}`;
    return timeString;
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

  _cancelEvent() {
    const { updateEvent, currentUser, event } = this.props;
    var activity = {
      admin_activity: {
      admin_id: currentUser.admin_id, 
      event_id: event.data.id, 
      action: "canceled"
      }
    }
    updateEvent(event.data.id, {
      canceled: true
    }, activity);
  }

  _uncancelEvent() {
    const { updateEvent, currentUser, event } = this.props;
    var activity = {
      admin_activity: {
      admin_id: currentUser.admin_id, 
      event_id: event.data.id, 
      action: "uncanceled"
      }
    } 
    updateEvent(event.data.id, {
      canceled: false
    }, activity);
  }

  _linkContent() {
    const { isAuthenticated, currentUser, event } = this.props;
    const eventHappened = new Date(event.data.start_datetime) < new Date();
    const eventSoldOut = event.tickets_available_per_event === 0;
    const eventCanceled = event.data.canceled;

    if (isAuthenticated) {
      if (currentUser.attendee_id) {
        if (!eventHappened && !eventSoldOut && !eventCanceled) {
          return(
            <Link to={`/events/${event.data.id}/tickets`} className="btn btn-primary">Get tickets now</Link>
          );
        }  else if (eventCanceled) {
            <p className="event-canceled-message">Event has been canceled</p>
        } else if (eventHappened) {
          return(
            <p className="event-expired-message">Event has already happened</p>
          );
        } else if (eventSoldOut) {
          <p className="event-sold-out-message">Sold out</p>
        }
      } else if (currentUser.admin_id) {
         if (!eventHappened && !eventCanceled) {
          return(
            <div>
              <Link to={`/admin/update/${event.data.id}`} className="btn btn-primary update-event-btn">Update event</Link>
              <button className="btn btn-danger delete-event-btn" onClick={this._cancelEvent}>Cancel event</button>
            </div>
          );
        } else if (eventCanceled) {
          return(
            <div>
              <button className="btn btn-danger delete-event-btn" onClick={this._uncancelEvent}>Uncancel event</button>
            </div>
          );
        } else if (eventHappened) {
          return(
            <p className="event-expired-message">Event has already happened</p>
          );
      }
    } else {
      return(
        <Link to={`/events/${event.data.id}/tickets`} className="btn btn-primary">Get tickets now</Link>
          );
    }
  }
}

  _attendeeTicketCountMessage() {
    const { isAuthenticated, currentUser, ticketsBoughtInSession, event } = this.props;
    const eventId = event.data.id;
    if (isAuthenticated && currentUser.attendee_id) {
      const attendeeTickets = (currentUser.tickets_bought).concat(ticketsBoughtInSession);
      console.log(attendeeTickets);
      var attendeeEventTicketsCount = 0;
      for (var i = 0; i < attendeeTickets.length; i++) {
        if (attendeeTickets[i].event_id === eventId) {
          attendeeEventTicketsCount++;
        }
      }
      console.log(ticketsBoughtInSession);
      if (attendeeEventTicketsCount > 0) {
          return(
            <p className="you-bought-message">You bought {attendeeEventTicketsCount} ticket(s) to this event</p>
            );
        } else {
          return (
            null
            );
        }
      }
  }

  _adminDetailsTable() {
    const { isAuthenticated, currentUser, event } = this.props;
    const types = event.data.types;
    var totalCapacity = 0;
    var totalRevenues = 0;
    if (isAuthenticated && currentUser.admin_id) {
      return (
        <div className="row">
          <span className="datakeys col-sm-4 col-md-4 col-lg-4 col-xl-4">Ticket sales so far</span>
          <table className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Price</th>
                <th scope="col">Capacity</th>
                <th scope="col">Tickets sold</th>
                <th scope="col">Tickets remaining</th>
                <th scope="col">Revenues</th>
              </tr>
            </thead>
            <tbody>
            {
              types.map((type) => {
                totalCapacity += type.capacity;
                totalRevenues += type.price * type.tickets_sold_per_type; 
                return (
                  <tr>
                    <td>{type.name}</td>
                    <td>EGP {type.price}</td>
                    <td>{type.capacity}</td>
                    <td>{type.tickets_sold_per_type}</td>
                    <td>{type.capacity - type.tickets_sold_per_type}</td>
                    <td>EGP {type.price * type.tickets_sold_per_type}</td>
                  </tr>
                  );

              })
            }
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" colSpan="2">Total</th> 
                <td>{totalCapacity}</td>
                <td>{event.tickets_sold}</td>
                <td>{event.tickets_available_per_event}</td>
                <td>EGP {totalRevenues}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        );
    } else {
      return null;
    }
  }

  render() {
    const {
      source,
      event,
      _filterEvents,
      loading,
      isAuthenticated,
      currentUser,
      error
    } = this.props;
    if (source === 'most-popular-events') {
    return (
      <div className="event col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Link to={`/events/${event.data.id}`}><img src={`${rootApi}${event.data.img.url}`} alt={event.data.title} className="event-img" /></Link>
        <h3><Link to={`/events/${event.data.id}`}>{event.data.title}</Link></h3>
        <p className="tickets-sold-per-event">{event.tickets_sold} ticket(s) sold</p>
        <Link to={_filterEvents({categoryId: event.data.category.id})}>#{event.data.category.name}</Link>
        <time dateTime={event.data.start_datetime}><Link to={_filterEvents({date: event.data.event_date})}>{this._parseDateToDisplay(event.data.event_date)}</Link> at {this._parseTimeToDisplay(event.data.start_datetime)}</time>
        </div>
      );  
    } else if (source === 'events' || source === 'upcomingEvents' || source === 'hottest-event') {
      return (
        <div className="event clearfix">
          {
            (new Date(event.data.start_datetime) < new Date()) 
            ? <p className="event-expired-message alert alert-warning">Event has already happened</p>
            : (event.tickets_available_per_event === 0)
              ? <p className="event-sold-out-message alert alert-warning">Sold out</p>
              : (event.data.canceled)
                ? <p className="event-canceled-message alert alert-warning">Canceled</p>
                : null
          }
          <Link to={`/events/${event.data.id}`}><img src={`${rootApi}${event.data.img.url}`} alt={event.data.title} className="event-img pull-start" /></Link>
          <div className="event-text-info pull-start">
            <h3><Link to={`/events/${event.data.id}`}>{event.data.title}</Link></h3>
            <Link to={_filterEvents({categoryId: event.data.category.id})}>#{event.data.category.name}</Link>
            <time dateTime={event.data.start_datetime}><Link to={_filterEvents({date: event.data.event_date})}>{this._parseDateToDisplay(event.data.event_date)}</Link> at {this._parseTimeToDisplay(event.data.start_datetime)}</time>
            <p>Duration: {this._parseDuration(event.data.end_datetime, event.data.start_datetime)}</p>
            <div className="overview">
            <p className="overview-line">{event.data.overview}</p>
              {
                (source === 'hottest-event')
                  ? <p className="hottest-event-tickets-remaining">{event.tickets_available_per_event} ticket(s) remaining!</p>
                  : <span></span>
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
            null
            );
        }
      } else {
        return(
          <div className="event-details container">
            {
              (event.data.canceled)
              ? <p className="event-canceled-message alert alert-warning">Canceled</p>
              : null
            }
            <div className="row">
              <h3><Link to={`/events/${event.data.id}`} className="col-sm-12 col-md-12 col-lg-12 col-xl-12">{event.data.title}</Link></h3>
            </div>
            <div className="row">
              <Link to={`/events/${event.data.id}`}><img src={`${rootApi}${event.data.img.url}`} alt={event.data.title} className="event-img col-sm-12 col-md-12 col-lg-12 col-xl-12" /></Link>
            </div>
            <div className="row">
              <Link to={_filterEvents({categoryId: event.data.category.id})} className="col-sm-12 col-md-12 col-lg-12 col-xl-12">#{event.data.category.name}</Link>
            </div>
            <div className="row">
              <span className="dataKeys col-sm-4 col-md-4 col-lg-4 col-xl-4">When?</span>
              <time dateTime={event.data.start_datetime} className="col-sm-8 col-md-8 col-lg-8 col-xl-8"><Link to={_filterEvents({date: event.data.event_date})}>{this._parseDateToDisplay(event.data.event_date)}</Link> at {this._parseTimeToDisplay(event.data.start_datetime)}</time>
            </div>
            <div className="row">
              <span className="dataKeys col-sm-4 col-md-4 col-lg-4 col-xl-4">How long?</span>
              <p className="col-sm-8 col-md-8 col-lg-8 col-xl-8">{this._parseDuration(event.data.end_datetime, event.data.start_datetime)}</p>
            </div>
            <div className="row">
              <span className="dataKeys col-sm-4 col-md-4 col-lg-4 col-xl-4">What exactly?</span>
              <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <p className="overview-line">{event.data.overview}</p>
              </div>
            </div>
            {
              (!isAuthenticated || (isAuthenticated && currentUser.attendee_id))
              ? <ul className="ticket-prices-per-type list-unstyled">
                {
                  event.data.types.map((type) => {
                    return(
                      <li className="row">
                        <span className="ticket-type-name col-sm-4 col-md-4 col-lg-4 col-xl-4">{type.name}</span>
                        <span className="ticket-type-name col-sm-4 col-md-4 col-lg-4 col-xl-4">EGP {type.price}</span>
                        {
                          (type.tickets_available_per_type === 0)
                          ? <span className="ticket-type-sold-out col-sm-4 col-md-4 col-lg-4 col-xl-4">Sold out</span>
                          : <span className="ticket-type-tickets-available col-sm-4 col-md-4 col-lg-4 col-xl-4">{type.tickets_available_per_type} tickets left</span>
                        }
                      </li>
                      );
                  })
                }
              </ul>
              : null
            }
            <div className="row">
              <span className="dataKeys col-sm-4 col-md-4 col-lg-4 col-xl-4">What'll be happening?</span>
              <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <p className="agenda-line">{event.data.agenda}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              {
                this._adminDetailsTable()
              }
              {
                this._linkContent()
              }
              {
                this._attendeeTicketCountMessage()
              }
              </div>
            </div>
        </div>
        );
      }
    }
  }
}

export default Event;
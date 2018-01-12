import React, {Component} from 'react';
import Event from '../../components/Event';

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this._filterEvents = this._filterEvents.bind(this);
  }

  componentWillMount() {
    const {
      handleNewSearchInput,
      getEvent,
      match: {params: {id}}
    } = this.props;
    getEvent(id);
    handleNewSearchInput('');
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
    } else if (params.title) {
      route = `/events?title=${params.title}`;
    } else {
      route = `/events`;
    }
    return route;
  }

  render() {
    const {
      event,
      loading,
      error,
      isAuthenticated,
      currentUser,
      ticketsBoughtInSession,
      updateEvent,
      postNewAdminActivity
    } = this.props;
    return (
      <div className="event-details-page">
        <Event event={event} source="eventDetails" loading={loading} error={error} _filterEvents={this._filterEvents} isAuthenticated={isAuthenticated} currentUser={currentUser} ticketsBoughtInSession={ticketsBoughtInSession} updateEvent={updateEvent} postNewAdminActivity={postNewAdminActivity} />
      </div>
    );
  }
}

export default EventDetails;
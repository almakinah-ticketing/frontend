import React, {Component} from 'react';
import Event from '../../components/Event';
import SearchForm from '../../components/SearchForm';

class EventDetails extends Component {
  componentWillMount() {
    const {
      getEvent,
      match: {params: {id}}
    } = this.props;
    getEvent(id);
  }

  render() {
    const {
      event,
      loading,
      error
    } = this.props;
    return (
      <div className="event-details-page">
        <SearchForm />
        <Event event={event} source="eventDetails" loading={loading} error={error} />
      </div>
    );
  }
}

export default EventDetails;
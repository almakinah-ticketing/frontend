import React, { Component } from 'react';
import Event from '../Event';

export default class HotestEvent extends Component {
	constructor(props) {
		super(props);
		this._hottestEvent = this._hottestEvent.bind(this);
	}

	_hottestEvent(events) {
		var hottestEvent;
		var availableEvents = events.filter(event => {
			return event.tickets_available_per_event !== 0 && new Date(event.data.start_datetime) >= new Date();
		})
		if (availableEvents.length === 0) {
			return;
		}
		var min = availableEvents[0].tickets_available_per_event;
		hottestEvent=  availableEvents[0];
		for(var i = 0; i < availableEvents.length; i++){
			var event = availableEvents[i];
			if (event.tickets_available_per_event <= min) {
				min = event.tickets_available_per_event;
				hottestEvent = event;
			} 
		}
		return hottestEvent;
	}

	componentWillMount(){
		this.props.getEvents({});
	}

	render(){
		const {
			events, 
			loading, 
			error, 
			_filterEvents
		} = this.props;
		var hottestEvent = this._hottestEvent(events);
		return (
			<div className="hottest-event">
				<h2>Hottest Event</h2>
				{ 
					(events === undefined && events.length === 0)
					? (loading)
				          ? <p className="loading-message">Loading hottest event...</p>
				          : (error)
				            ? <p className="error-message">Oops, something went wrong!</p>
				            : <span></span>
				      : (hottestEvent)
				      	? <Event event={hottestEvent} loading={loading} error={error} source="hottest-event" _filterEvents={_filterEvents} />
				      	: <span></span>
				}
			</div>
		);
	}
}
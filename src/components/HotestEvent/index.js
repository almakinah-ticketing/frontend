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
			return event.tickets_available_per_event !== 0 && new Date(event.data.start_datetime) >= new Date() && event.data.canceled !== true;
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

	render(){
		const {
			events, 
			loading, 
			error, 
			_filterEvents,
			currentUser,
			isAuthenticated
		} = this.props;
		return (
			<div className="hottest-event-container">
				{ 
					(events === undefined || events.length === 0)
					? (loading)
				          ? <p className="loading-message">Loading hottest event...</p>
				          : (error)
				            ? <p className="error-message">Oops, something went wrong!</p>
            					: null
			      		: (this._hottestEvent(events) !== undefined)
			      			? <Event event={this._hottestEvent(events)} currentUser={currentUser} isAuthenticated={isAuthenticated} loading={loading} error={error} source="hottest-event" _filterEvents={_filterEvents} />
			      			: <span></span>
				}
			</div>
		);
	}
}
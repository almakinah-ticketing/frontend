import React, { Component } from 'react';

export default class HotestEvent extends Component {
	componentWillMount(){
		this.props.getHotestEvent();
	}

	render(){
		const {hotestEvent, loading, error} = this.props;
		return(
			<div>
				<h2>HotestEvent</h2>
			{
				hotestEvent.map((event) => {
					return(
						<div>
							<h3>{event.title}</h3>
							<p>{event.img}</p>
							<p>{event.overview}</p>
							<p>{event.agenda}</p>
							<p>{event.event_date}</p>
						</div>




					)
				})
			}
			
				
			</div>
		)

	}
}
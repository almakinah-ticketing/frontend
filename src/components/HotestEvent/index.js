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
			
			
				<div>{hotestEvent.title}</div>
				
				<div>{hotestEvent.date}</div>
			</div>
		)

	}
}
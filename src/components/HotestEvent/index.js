import React, { Component } from 'react';

export default class HotestEvent extends Component {
	componentWillMount(){
		this.props.getHotestEvent();
	}

	render(){
		const {hotestEvent, loading, error} = this.props;
		return(
			<div>
				<h1>HotestEvent</h1>
			
			
				<div>{hotestEvent.title}</div>
				
				<div>{hotestEvent.date}</div>
			</div>
		)

	}
}
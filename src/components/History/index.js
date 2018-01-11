import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class History extends Component {
  componentWillMount() {
    const {
		getHistory
    } = this.props;
    getHistory();
  }

  render() {
    const {history, loading, error} = this.props;
    console.log(history);
    return (
      <div>
        <h2>History</h2>     
        <ul>
        {
        	history.map((histo) => {
        		return (
        			<li>1 * ticket for: {histo}</li>
        			)
        	})
        }
        </ul>  
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {refundApi} from '../../apiConfig';

export default class History extends Component {
  componentWillMount() {
    const {
		getHistory
    } = this.props;
    getHistory();
    
  }
  handleClick = (e) => {
    // console.log(e.target.id);
    Axios.post(refundApi(e.target.id));
    alert('Refund request sent Successfully');

  }
  render() {
    const {history, loading, error} = this.props;
    // console.log(history);
    
    return (
      <div>    
        <ul>
        {
        	history.map((histo) => {
        		return (
        			<li>1 * ticket to: {histo[0].event} for: {histo[0].price} EGP <button onClick={this.handleClick} id={histo[0].charge}>Refund</button></li>
        			)
        	})
        }
        </ul>  
      </div>
    )
  }
}
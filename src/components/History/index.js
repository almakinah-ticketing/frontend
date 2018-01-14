import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {refundApi} from '../../apiConfig';
import './History.css';

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
    return(
      <div class="test">
      {
      history.map((histo) => {
      return (
      <div class="box">
      <div class='inner'>
      <h1>{histo[0].event}</h1>
      <div class='info clearfix'>
        <div class='wp'>Tickets<h2>1</h2></div>
        <div class='wp'>Type<p>{histo[0].type}</p></div>
        <div class='wp'><h2><button class="btn btn-primary" onClick={this.handleClick} id={histo[0].charge}>Refund</button></h2></div>
      </div>
      <div class='total clearfix'>
        <h2>Total : <p>{histo[0].price}</p></h2>
      </div>
      </div>
    </div>
    )
        	})
        }
        </div>
    )
    // return (
    //   <div class="card" class="container-fluid">    
    //     <ul class="list-group list-group-flush">
    //     {
    //     	history.map((histo) => {
    //     		return (
    //     			<li class="list-group-item"><span className="x">1 X</span> ticket to: {histo[0].event} ,for: {histo[0].price} EGP <button class="btn btn-primary" onClick={this.handleClick} id={histo[0].charge}>Refund</button></li>
    //     			)
    //     	})
    //     }
    //     </ul>  
    //   </div>
    // )
  }
}
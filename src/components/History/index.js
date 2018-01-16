import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {refundApi , refunddeleteApi} from '../../apiConfig';
import './History.css';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const {
		getHistory
    } = this.props;
    getHistory();
  }

  componentWillReceiveProps(nextProps) {
    const {
		getHistory, history
    } = this.props;
    console.log("THIS.PROPS", this.props);
    console.log("NEXT.PROPS", nextProps);
    // if (history.length !== nextProps.history.length) {
    //   getHistory();      
    // }    
  }
  handleClick = (e) => {
    // console.log(e.target.id);
    const { getHistory } = this.props;
    Axios.post(refundApi(e.target.id));
    alert('Refund request sent Successfully');
    Axios.delete(refunddeleteApi(e.target.name)).then (function (response) {
      getHistory();
    })
  }
  render() {
    const {history, loading, error} = this.props;
    // console.log(history);
    return(
      <div className="test">
      {
      history.map((histo) => {
      return (
      <div className="box">
      <div className='inner'>
      <h3>{histo[0].event}</h3>
      <div className='info clearfix'>
        <div className='wp'>Tickets<h4>1</h4></div>
        <div className='wp'>Type<p>{histo[0].type}</p></div>
        <div className='wp'><h4><button className="btn btn-primary" onClick={this.handleClick} id={histo[0].charge} name={histo[0].id}>Refund</button></h4></div>
      </div>
      <div className='total clearfix'>
        <h4>Total : <p>{histo[0].price}</p></h4>
      </div>
      </div>
    </div>
    )
        	})
        }
        </div>
    )
    // return (
    //   <div className="card" className="container-fluid">    
    //     <ul className="list-group list-group-flush">
    //     {
    //     	history.map((histo) => {
    //     		return (
    //     			<li className="list-group-item"><span classNameName="x">1 X</span> ticket to: {histo[0].event} ,for: {histo[0].price} EGP <button className="btn btn-primary" onClick={this.handleClick} id={histo[0].charge}>Refund</button></li>
    //     			)
    //     	})
    //     }
    //     </ul>  
    //   </div>
    // )
  }
}
import React, { Component } from 'react';
import './PurchaseForm.css';
import history from '../../history';
import { Link } from 'react-router-dom';
import Checkout from '../../containers/Checkout';
var t1 = 0;
var t2 = 0;

export default class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    const {types} = this.props;
    this.state = {};
    this._parseDateToDisplay = this._parseDateToDisplay.bind(this);
    this._parseTimeToDisplay = this._parseTimeToDisplay.bind(this);
  }


  componentWillReceiveProps(nextProps){
    const {types} = nextProps;
    if (Object.keys(this.state).length === 0 && Object.keys(types).length !== 0) {
      const state = {};
      types.map((type) => {
        state[type.name] = 0;
      });
      this.setState({
        ...state,
        type_ids: []
      });
    }
  }

  componentWillMount(){
    const { isAuthenticated, currentUser, getEvent, getTypes, handleNewSearchInput } = this.props;
    const eventId = this.props.match.params.id;
    getEvent(eventId);
    getTypes(eventId);
    handleNewSearchInput('');
  }

  _increment(type, event) {
    if (this.state[type.name]==type.available_tickets){
      this.setState({
      [type.name]: this.state[type.name]
    })
    }else{
      const type_ids = this.state.type_ids.slice(0);
      type_ids.push(type.id);
      this.setState({
      [type.name]: this.state[type.name] + 1,
      type_ids
    })
    }
    
  }

   _decrement(type, event) {
    if (this.state[type.name]==0){
      this.setState({
      [type.name]: this.state[type.name]
    })
    }else {
      const type_ids = this.state.type_ids.slice(0);
      delete type_ids[type_ids.indexOf(type.id)];
      this.setState({
        [type.name]: this.state[type.name] - 1,
        type_ids
      })
    }
  }

  _parseDateToDisplay(dateArg) {
    var dateNew = new Date(dateArg);
    var daysWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var dayWeek = daysWeek[dateNew.getDay()];
    var dayMonth = dateNew.getDate();
    var month = months[dateNew.getMonth()];
    var year = dateNew.getFullYear();
    var dateString = `${dayWeek} ${month} ${dayMonth} ${year}`;
    return dateString;
  }

  _parseTimeToDisplay(dateArg) {
    var dateNew = new Date(dateArg);
    var hours24 = dateNew.getHours();
    var hours;
    if (hours24 > 12) {
      hours = hours24 - 12;
    } else if (hours24 >= 10) {
      hours = hours24;
    } else if (hours24 < 10) {
      hours = `0${hours24}`;
    }
    var minutes = dateNew.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    var amOrPm = (hours24 >= 12) ? 'pm' : 'am';
    var timeString = `${hours}:${minutes} ${amOrPm}`;
    return timeString;
  }

  // totalTickets(){
  //   if (Object.keys(this.state).length !== 0) {
  //     types.map((type) => {
  //       const totalTickets = this.state[type.name] ;
  //       console.log(totalTickets)
  //       totalTickets = totalTickets + this.state[type.name];
  //       console.log(totalTickets)
  //     });
  //   }
  // }
   render() {
    // console.log(this.state, this.state['Type 1']+this.state['Type 2']+this.state['Type 3']);
    const {types, loading, error, count, increment, decrement, event} = this.props;
    if (Object.keys(event).length !== 0) {
      const eventHappened = new Date(event.data.start_datetime) < new Date();
      const eventSoldOut = event.tickets_available_per_event === 0;
      const eventCanceled = event.data.canceled;
      if (eventCanceled || eventHappened || eventSoldOut) {
        history.replace(`/events/${event.data.id}`);
        return null;
      } else {
      const {type_ids} = this.state;
      let total = 0;
      return(
        <div className="purchase-form page">
          <h2>Get tickets to <Link to={`/events/${event.data.id}`}>{event.data.title}</Link></h2>
          {
          types.map((type) => {
            const count = this.state[type.name];
            total += type.price * count;
           // console.log(this.state[type.name]+count);
          const eveId = this.props.match.params.id;
          t1 = eveId;
          // console.log(t1);
          var getTyped = type.id;
          t2 = getTyped;
          // console.log(t2);
          // console.log(type_ids);
            return (
              <div>
                <div className="clearfix">
                  <label className="typeName">{type.name}     </label>
                  <label className="typePrice">{type.price} EGP</label>
                  <div className="counter">
                    <label>{count}</label>  
                    <button onClick={(event) => {this._increment(type, event)}}>+</button>
                    <button onClick={(event) => {this._decrement(type, event)}}>-</button>
                  </div>
                </div>
                
              </div>
              )
          })
        }  
        <div>
          <p>Total: {total}</p>
        </div>
        <div>
          <p>
                    <Checkout
                      name={event.data.title}
                      description={this._parseDateToDisplay(event.data.start_datetime) + ' at ' + this._parseTimeToDisplay(event.data.start_datetime)}
                      amount={total}
                      event_id={t1}
                      type_id={t2}
                      type_ids={type_ids}
                    />
          </p>
          <Link to={`/events/${event.data.id}`} className="btn btn-secondary">Back to event</Link>
        </div>
          <small>As per our cancelation policy, purchased tickets are non-refundable except if the event is canceled by organizers.</small>
        </div>
      );
      }
    } else {
      return <div>Loading...</div>
    }
  }
}

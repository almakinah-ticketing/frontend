import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';
import {buyApi} from './apiConfig';
import {stripeApi} from './apiConfig';

export default class Checkout extends Component {
  successPayment = (event_id, type_id,type_ids) => {
    const { updateAttendeeTicketsDispatcher } = this.props;
    alert('Payment Successful');
    const url=buyApi;
    const type='type_id='+ type_id+'&';
    const event= 'event_id='+event_id;
    const urls= url+type+event
        type_ids.map(type => {
        var typepath = 'type_id='+ type +'&';
        var furl= url+typepath +event
        axios.post(String(furl))
        .then(function (response) {
          if (response.status < 400) {
            updateAttendeeTicketsDispatcher(response.data);
          }
        });
      })
  }
  
  errorPayment = (data) => {
    alert('Payment Error');
  }

  onToken = (amount, description, event_id, type_id,type_ids) => token => { 
    const { currentUser } = this.props;
    axios.post(stripeApi,
      {
        description,
        stripeToken: token.id,
        attendee_id: currentUser.attendee_id,
        currency: 'EGP',
        amount: amount
      })
      .then(() => this.successPayment(event_id, type_id,type_ids))
      .catch(this.errorPayment)
    }

  render() {
    const { name, description, amount, event_id, type_id, type_ids } = this.props;
    return(
      <StripeCheckout
        name={name}
        description={description}
        amount={amount*100}
        token={this.onToken(amount, description, event_id, type_id, type_ids)}
        currency={'EGP'}
        stripeKey={'pk_test_fm10TRh9MmJSObGmK461z326'}
        event_id={event_id}
        type_id={type_id}
        type_ids={type_ids}
      />
      );
  }
}
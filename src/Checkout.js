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
  }
  
  errorPayment = (data) => {
    alert('Payment Error');
  }

  onToken = (amount, description, event_id, type_id,type_ids,attendee_id) => token => {
    const { currentUser } = this.props
    axios.post(stripeApi,
      {
          description,
          stripeToken: token.id,
          attendee_id: currentUser.attendee_id,
          currency: 'EGP',
          amount: amount,
          attendee_id:attendee_id,
          event_id:event_id,
          type_id:type_id,
          type_ids:type_ids
        })
        .then((response) => this.successPayment(event_id, type_id,type_ids))
        .catch(this.errorPayment)
    }

  render() {
    const { name, description, amount, event_id, type_id, type_ids, attendee_id } = this.props;
    return(
      <StripeCheckout
        name={name}
        description={description}
        amount={amount*100}
        token={this.onToken(amount, description, event_id, type_id, type_ids,attendee_id)}
        currency={'EGP'}
        stripeKey={'pk_test_fm10TRh9MmJSObGmK461z326'}
        event_id={event_id}
        type_id={type_id}
        type_ids={type_ids}
        attendee_id={attendee_id}
      />
      );
  }
}
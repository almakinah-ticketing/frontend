import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';
import {buyApi} from './apiConfig';
import {stripeApi} from './apiConfig';

const CURRENCY = 'EGP';

const successPayment = (event_id, type_id,type_ids) => {
  alert('Payment Successful');
  const url=buyApi;
  const type='type_id='+ type_id+'&';
  const event= 'event_id='+event_id;
  const urls= url+type+event
      type_ids.map(type => {
      var typepath = 'type_id='+ type +'&';
      var furl= url+typepath +event
      axios.post(String(furl))
    })
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description, event_id, type_id,type_ids) => token => 
  axios.post(stripeApi,
    {
      description,
      stripeToken: token.id,
      currency: CURRENCY,
      amount: amount
    })
    .then(() => successPayment(event_id, type_id,type_ids))
    .catch(errorPayment)

const Checkout = ({ name, description, amount , event_id , type_id, type_ids}) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={amount*100}
    token={onToken(amount, description, event_id, type_id, type_ids)}
    currency={CURRENCY}
    stripeKey={'pk_test_fm10TRh9MmJSObGmK461z326'}
    event_id={event_id}
    type_id={type_id}
    type_ids={type_ids}
  />

export default Checkout;
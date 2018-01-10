const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_test_fm10TRh9MmJSObGmK461z326'
: 'pk_test_fm10TRh9MmJSObGmK461z326';

export default STRIPE_PUBLISHABLE;
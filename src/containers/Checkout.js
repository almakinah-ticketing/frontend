import { connect } from 'react-redux';
import Checkout from '../Checkout';
import { updateAttendeeTickets } from '../actions/authentication';

const mapStateToProps = (store) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  updateAttendeeTicketsDispatcher: (ticket) => {
      dispatch(updateAttendeeTickets(ticket));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
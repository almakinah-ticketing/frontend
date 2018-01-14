import { connect } from 'react-redux';
import Checkout from '../Checkout';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser
  };
}

export default connect(mapStateToProps)(Checkout);
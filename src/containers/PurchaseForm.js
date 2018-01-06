import { connect } from 'react-redux';
import PurchaseForm from '../pages/PurchaseForm';

const mapStateToProps = (store) => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser
  }
}

export default connect(mapStateToProps)(PurchaseForm);
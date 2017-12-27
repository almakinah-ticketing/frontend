import { connect } from 'react-redux';
import TicketTypes from '../pages/PurchaseForm';
import{
  getTypesLoading, getTypes, getTypesSuccess, getTypesFailure
} from '../actions/ticketTypes';


const mapStateToProps = (store) => {
  return{
    types: store.types.types,
    loading: store.types.loading,
    error: store.types.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getTypes: () => {
      dispatch(getTypesLoading());
      dispatch(getTypes()).then(response => {
        if (response.payload.status<400){
          dispatch(getTypesSuccess(response.payload.data));
        }else{
          dispatch(getTypesFailure(response.payload.message));
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketTypes);
import { connect } from 'react-redux';
import TicketTypes from '../pages/PurchaseForm';
import{
  getTypesLoading, getTypes, getTypesSuccess, getTypesFailure
} from '../actions/ticketTypes';


const mapStateToProps = (store) => {
  return{
    types: store.ticketTypes.types,
    loading: store.ticketTypes.loading,
    error: store.ticketTypes.error
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





















// import { connect } from 'react-redux';
// import TicketTypes from '../pages/PurchaseForm';
// import{
//   getTypesLoading, getTypes, getTypesSuccess, getTypesFailure
// } from '../actions/ticketTypes';
// import TicketsCounter from '../components/TicketsCounter';
// import {increment, decrement} from '../actions/ticketsCounter';



// const mapStateToProps = (store) => {
//   return{
//     types: store.ticketTypes.types,
//     loading: store.ticketTypes.loading,
//     error: store.ticketTypes.error
//     count: state.ticketsCounter.count,

//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     getTypes: () => {
//       dispatch(getTypesLoading());
//       dispatch(getTypes()).then(response => {
//         if (response.payload.status<400){
//           dispatch(getTypesSuccess(response.payload.data));
//         }else{
//           dispatch(getTypesFailure(response.payload.message));
//         }
//       });
//     }
//     increment:() => {
//       dispatch(increment());
//     },
//     decrement:() => {
//       dispatch(decrement());
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TicketTypes);
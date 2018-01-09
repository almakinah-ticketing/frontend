import { connect } from 'react-redux';
import TicketTypes from '../pages/PurchaseForm';
import EventTypes from '../pages/EventForm';
import{
  getTypesLoading, getTypes, getTypesSuccess, getTypesFailure, addType, addTypeLoading, addTypeSuccess, addTypeFailure
} from '../actions/ticketTypes';


const mapStateToProps = (store) => {
  return{
    types: store.ticketTypes.types,
    type: store.ticketTypes.type,
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
    },


    addType: (type) => {
      dispatch(addTypeLoading());
      dispatch(addType(type)).then((response) => {
        if (response.payload.status < 400) {
          dispatch(addTypeSuccess(response.payload.data));
        } else {
          dispatch(addTypeFailure(response.payload.message));
        }
      });
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketTypes);
export const EventForm = connect(mapStateToProps, mapDispatchToProps)(EventTypes);






















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
import { connect } from 'react-redux';
// import TicketTypes from '../pages/PurchaseForm';
// import EventTypes from '../pages/EventForm';
import PurchaseForm from '../pages/PurchaseForm';
import {
  getTypesLoading, getTypes, getTypesSuccess, getTypesFailure, addType, addTypeLoading, addTypeSuccess, addTypeFailure
} from '../actions/ticketTypes';
import {
  getEventLoading, getEvent, getEventSuccess, getEventFailure,
  handleNewSearchInput
} from '../actions/events';


const mapStateToProps = (store) => {
  return{
    isAuthenticated: store.authentication.isAuthenticated,
    currentUser: store.authentication.currentUser,
    types: store.ticketTypes.types,
    type: store.ticketTypes.type,
    loading: store.ticketTypes.loading,
    error: store.ticketTypes.error,
    event: store.events.event
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getTypes: (eventId) => {
      dispatch(getTypesLoading());
      dispatch(getTypes(eventId)).then(response => {
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
    },
    getEvent: (eventId) => {
      dispatch(getEventLoading());
      dispatch(getEvent(eventId)).then(response => {
        if (response.payload.status<400) {
          dispatch(getEventSuccess(response.payload.data));
        } else {
          dispatch(getEventFailure(response.payload.response.data));
        }
      });
    },
    handleNewSearchInput: (searchInput) => {
      dispatch(handleNewSearchInput(searchInput));
    }
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)(TicketTypes);
// export const EventForm = connect(mapStateToProps, mapDispatchToProps)(EventTypes);
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);






















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

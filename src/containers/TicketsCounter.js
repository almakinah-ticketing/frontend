import { connect } from 'react-redux';
import TicketsCounter from '../components/TicketsCounter';
import {increment, decrement} from '../actions/ticketsCounter';

const mapStateToProps = function(state){
     return {
         count: state.ticketsCounter.count,
         
     }
 }

const mapDispatchToProps = function(dispatch) {
	return{
		increment:() => {
			dispatch(increment());
		},
		decrement:() => {
			dispatch(decrement());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsCounter);
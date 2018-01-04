import {INCREMENT, DECREMENT} from '../actions/ticketsCounter';

const INITIAL_STATE = {
    count: 0
}

export default (currentState = INITIAL_STATE, action) => {
	switch (action.type) {
	  case INCREMENT:
		return {count: currentState.count+1}
	    break;
	  case DECREMENT:
	  	return {count: currentState.count-1}
	  default:
      return currentState;
	}

}


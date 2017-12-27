import { connect } from 'react-redux';
import HotestEvent from '../components/HotestEvent';
import {
  getHotestEventLoading, getHotestEvent, getHotestEventSuccess, getHotestEventFailure
} from '../actions/hotestEvent';

const mapStateToProps = (store) => {
  return {
    hotestEvent: store.hotestEvent.hotestEvent,
    loading: store.hotestEvent.loading,
    error: store.hotestEvent.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getHotestEvent: () => {
      dispatch(getHotestEventLoading());
      dispatch(getHotestEvent()).then(response =>{
        if (response.payload.status<400){
          dispatch(getHotestEventSuccess(response.payload.data));
          
        }else{
          dispatch(getHotestEventFailure(response.payload.message));
        }
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HotestEvent);
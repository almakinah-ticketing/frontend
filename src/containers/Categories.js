import { connect } from 'react-redux';
import Categories from '../components/Categories';
import {
  getCategoriesLoading, getCategories, getCategoriesSuccess, getCategoriesFailure
} from '../actions/categories';

const mapStateToProps = (store) => {
  return {
    categories: store.categories.categories,
    loading: store.categories.loading,
    error: store.categories.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getCategories: () => {
      dispatch(getCategoriesLoading());
      dispatch(getCategories()).then(response => {
        if(response.payload.status<400){
          dispatch(getCategoriesSuccess(response.payload.data));
        
        }else{
          dispatch(getCategoriesFailure(response.payload.message));

        }
      })
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
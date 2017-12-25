import { connect } from 'react-redux';
import Categories from '../components/Categories';
import {
  getCategoriesLoading, getCategories, getCategoriesSuccess, getCategoriesFailure
} from '../actions/categories';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    loading: state.categories.loading

  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    getCategories: () => {
      dispatch(getCategoriesLoading());
      dispatch(getCategories()).then(response => {
        if(response.payload.status<400){
          dispatch(getCategoriesSuccess(response.payload.categories));

        }else{
          dispatch(getCategoriesFailure(response.payload.message));

        }
      })
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
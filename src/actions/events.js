// import Axios from 'axios';
// import { eventsApi, eventsByCategoryApi } from '../apiConfig';

// /* Action types */

// // Get all events
// export const GET_CATEGORIES_LOADING = 'GET_CATEGORIES_LOADING';
// export const  GET_CATEGORIES = 'GET_CATEGORIES';
// export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
// export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';


// /* Action object creators */

// // Get all categories

// export const getCategoriesLoading = () => {
//   return{
//     type : GET_CATEGORIES_LOADING
//   }
// }

// export const getCategories = () => {
//   const payload = Axios.get(categoriesApi);
//   return{
//     type: GET_CATEGORIES,
//     payload
//   }
// }

// export const getCategoriesSuccess = (categories) => {
//   return{
//     type: GET_CATEGORIES_SUCCESS,
//     categories
//   }
// }

// export const getCategoriesFailure = (error) => {
//   return{
//     type: GET_CATEGORIES_FAILURE,
//     error
//   }
// }
  // Action Types


export const INCREMENT= 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SUCCESS= 'SUCCESS';
export const FAILURE= 'FAILURE'


  // Action Creators
 
export function increment(){
    return {
        type: INCREMENT
    }
}
export function decrement(){
   return {
       type: DECREMENT
   }
}

// export const Success = (capacity) => {
//   return{
//     type: SUCCESS,
//     capacity
//   }
// }

// export const Failure = (error) => {
//   return{
//     type: FAILURE,
//     error
//   }
// }


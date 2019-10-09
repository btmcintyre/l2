// action/reducer file for the reports module 

//immer is a library to keep the reducers pure, i.e. not modify input data but instead create and return new changed data
// e.g.
// const nextState = produce(currentState, draft => {
//   draft.value = newvalue
//})
import produce from "immer"

// string that simply describes the type of an action
// type definitions - note @module prefix namespace, this also helps with debugging
export const FETCH_PRODUCTS_PENDING = "@reports/FETCH_PRODUCTS_PENDING";
export const FETCH_PRODUCTS_SUCCESS = "@reports/FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "@reports/FETCH_PRODUCTS_ERROR";

// Actions creater functions
// Best practice to use action creater functions to return the action type constant, especially
// when we want to dispatch an action of a complex nature.
export const fetchProductsPending = () => ({ type: FETCH_PRODUCTS_PENDING });
export const fetchProductsSuccess = (products) => ({ type: FETCH_PRODUCTS_SUCCESS, products: products });
export const fetchProductsError = (error) => ({ type: FETCH_PRODUCTS_ERROR, error: error });

// initial state for this slice of the store
const initialState = {
    pending: false,
    products: [],
    error: null
};

const errorMsg = [{id:0,name:'Unfortuantly There is a problem with the Products Server at this time.'}]

// reducer 
// specify how the state should change in response to actions sent to the store for this module of the app
function reportReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_PENDING: 
        return produce(state, draft => {
          draft.pending = true
        });
        case FETCH_PRODUCTS_SUCCESS:
          return produce(state, draft => {
            draft.pending = false
            draft.products = action.products
          });
        case FETCH_PRODUCTS_ERROR:
          return produce(state, draft => {
            draft.pending = false
            draft.products = errorMsg
            draft.error = action.error
          })
        default: 
            return state;
    }
}

export default reportReducer

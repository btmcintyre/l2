// action/reducer file for the counter module 

//immer is a library to keep the reducers pure, i.e. not modify input data but instead create and return new changed data
// e.g.
// const nextState = produce(currentState, draft => {
//   draft.value = newvalue
//})
import produce from "immer"

// string that simply describes the type of an action
// type definitions - note @module prefix namespace, this also helps with debugging
const INCREMENT = "@counter/INCREMENT";
const DECREMENT = "@counter/DECREMENT";
const RESET = "@counter/RESET";
const COUNTERTEXT = "@counter/COUNTERTEXT";


// Actions creater functions
// Best practice to use action creater functions to return the action type constant, especially
// when we want to dispatch an action of a complex nature.
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const counterText = (payload) => ({ type: COUNTERTEXT, payload });

// initial state for this slice of the store
const initialState = {
  count: 0,
  name: 'Start',
  counterNotes: ''
};

// reducer 
// specify how the state should change in response to actions sent to the store for this module of the app
function counterReducer(state = initialState, action) {
   switch(action.type) {
    case INCREMENT:
      return produce(state, draft => {
        draft.count = draft.count + 1
        draft.name = 'Going Up'
      });
    case DECREMENT:
      return produce(state, draft => {
        draft.count = draft.count - 1
        draft.name = 'Going Down'
      });
    case RESET:
      return produce(state, draft => {
        draft.count = 0
        draft.name = 'Reset'
        draft.counterNotes = ''
      });
    case COUNTERTEXT:
      return produce(state, draft => {
        draft.counterNotes = action.payload
      });
    default:
      return state;
  }
}

export default counterReducer;
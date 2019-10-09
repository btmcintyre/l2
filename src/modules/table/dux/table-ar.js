// action/reducer file for the table module

//immer is a library to keep the reducers pure, i.e. not modify input data but instead create and return new changed data
// e.g.
// const nextState = produce(currentState, draft => {
//   draft.value = newvalue
//})
import produce from "immer"

// string that simply describes the type of an action
// type definitions - note @module prefix namespace, this also helps with debugging
const TABLETEXT = "@table/TABLETEXT";

// Actions creater functions
// Best practice to use action creater functions to return the action type constant, especially
// when we want to dispatch an action of a complex nature.
export const tabletext = (payload) => ({ type: TABLETEXT, payload });

// initial state for this slice of the store
const initialState = {
  tableNotes: ''
};

// reducer
// specify how the state should change in response to actions sent to the store for this module of the app
function tableReducer(state = initialState, action) {
  switch(action.type) {
    case TABLETEXT:
        return produce(state, draft => {
          draft.tableNotes = action.payload
        });
    default:
      return state;
  }
}

export default tableReducer;
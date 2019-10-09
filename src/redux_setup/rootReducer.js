// helper object that gathers up all the reducer in the app and returns a single reducer
// which is pass into the CreateStore function when creating the store

import {combineReducers} from 'redux'
import counterReducer from '../modules/counter/dux/counter-ar.js'
import tableReducer from '../modules/table/dux/table-ar.js'
import reportReducer from '../modules/report/dux/report-ar.js'

const rootReducer = combineReducers({
  counter: counterReducer, 
  table: tableReducer,
  report: reportReducer
});

export default rootReducer
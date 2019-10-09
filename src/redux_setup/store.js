import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './rootReducer.js'
import createSagaMiddleware from 'redux-saga' 
import reportSaga from '../modules/report/sagas/report-sagas'


// Create the redux-saga middleware as a Redux Subspace middleware
const sagaMiddleware = createSagaMiddleware()
  
// technique to get Redux devtools working 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the store
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)) // Apply the saga middleware to our redux store so redux actions actually pass through our saga functions
);

// run the reportSage which will be responsible for watching for any redux actions the report module is interested in
sagaMiddleware.run(reportSaga)

export default store;

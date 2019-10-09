// this file contains functions for the report module to handle side effects (i.e. asynchronous things like data fetching and 
// impure things like accessing the browser cache easier and better.

import {put, takeLatest} from 'redux-saga/effects'
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../dux/report-ar' 

// This is the Async function called when the users wants to get producs from the external api.
// The Saga middleware is watching for its action type in the Redux cycle and Saga manages the Async nature
// of this call so the UI is not stalled waiting for a response. It uses Generators (or generator functions) which are
// functions that can stop midway waiting for a response and then continue where they left off when the Async func returns 
// a response. 
function* getProducts() {
  try {
    const json = yield fetch('http://www.mocky.io/v2/5d93747130000061001b751b?mocky-delay=5s')
        .then(response => response.json(), ); 
    const res = json.products;
    
    const products = res.map(p => ({'id':res.indexOf(p), 'name':p}));
    
    yield put({ type: fetchProductsSuccess().type, products: products});

  } catch (error) {
    console.log(error)
    yield put({ type: fetchProductsError().type, error: error });
    
  }
}

// define report saga generator and export to the store for registration when the store is being setup
export default function* reportSaga() {
  yield takeLatest(fetchProductsPending().type, getProducts);
}
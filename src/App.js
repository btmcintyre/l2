import React from 'react';
import { Provider } from 'react-redux';
import '../node_modules/carbon-react/lib/utils/css/css.js';
import './App.css';

import Counter from './modules/counter/screens/counter-s.js';
import Table   from './modules/table/screens/table-s.js';
import Report  from './modules/report/screens/report-s.js';

import store from './redux_setup/store.js';


const App = () => (
  <div>
    <Provider store={store}>
      <Counter/>
      <div>----------------------------------------------------------------------------------------------------</div>
      <Table/>
      <div>----------------------------------------------------------------------------------------------------</div>
      <Report/>
    </Provider>
 
  </div>
);

export default App;
import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Home';
// 导入redux
import { Provider } from 'react-redux'
import store from '../redux/store'

const rootRoute = (
  <Provider store={store}>
  <BrowserRouter>
    <div>
      <Route  path="/" render={() =>Home}></Route>
    </div>
  </BrowserRouter>
  </Provider>
);

  export default rootRoute;
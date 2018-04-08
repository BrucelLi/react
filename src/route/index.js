import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Home';
const rootRoute = (
  <BrowserRouter>
    <div>
      <Route  path="/" render={() =>Home}></Route>
    </div>
  </BrowserRouter>
);

  export default rootRoute;
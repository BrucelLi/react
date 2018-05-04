import React from 'react'
// 加载路由
import {Route, BrowserRouter} from 'react-router-dom';
// 加载首页
import Home from './Home';
import BasicExample from '../views/routeTest';
// 导入redux
import { Provider } from 'react-redux'
import store from '../redux/store'

const rootRoute = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {/* 首页路由集合 */}
        <Route exact path="" render={Home}></Route>
        <Route exact path="/test" component={BasicExample}></Route>
      </div>
    </BrowserRouter>
  </Provider>
);

export default rootRoute;
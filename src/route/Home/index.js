import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import HomeIndex from '../../views/home';
import Test from '../../views/routeTest';

const Home = ({history, location, match}) => (
    <BrowserRouter history={history} location={location}>
        <div>
            {/* 首页路由 */}
            <Route exact path={`${match.path}`} component={HomeIndex} />
            <Route exact path={`${match.path}myname`} component={Test} />
            <Route exact path='/drawing/index' component={()=>(<h1>画友</h1>)} />
            <Route exact path='/game/index' component={()=>(<h1>游戏中心</h1>)} />
            <Route exact path='/live/index' component={()=>(<h1>直播</h1>)} />
            <Route exact path='/member/buy/index' component={()=>(<h1>会员购</h1>)} />
            <Route exact path='/download/app' component={()=>(<h1>下载app</h1>)} />
            <Route exact path='/login' component={()=>(<h1>登录</h1>)} />
            <Route exact path='/history/index' component={()=>(<h1>历史</h1>)} />
            <Route exact path='/contribute/index' component={()=>(<h1>投稿</h1>)} />
        </div>
    </BrowserRouter>     
);


export default Home;
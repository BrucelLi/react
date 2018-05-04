import React from 'react';
import {Route} from 'react-router-dom';

import ReduxTest from './../../views/reduxTest';

const route = (
    <div>
        <Route  path="/index" component={ReduxTest}></Route>
    </div>
);

export default route;
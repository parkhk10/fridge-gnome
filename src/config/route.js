import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
 import {
    Home
 } from '../components';

// import {
//     Header
// } from '../components'

const AppNavigator = () => (
    <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
    </div>
)

export { AppNavigator };

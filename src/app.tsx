import * as React from "react";
import * as ReactDOM from "react-dom";

import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import {loginState, aboutState} from './routes/routes';
import NavigationBarComponent from './components/navigationBarComponent'

var user: {
    'userType': 'buyer'
}
ReactDOM.render(
    <div>
        <NavigationBarComponent userType='buyer' />
    </div>,
    document.getElementById("root")
);

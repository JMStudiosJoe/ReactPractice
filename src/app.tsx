import * as React from "react";
import * as ReactDOM from "react-dom";

import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import NavigationBarComponent from './components/navigationBarComponent'
import ParallaxComponent from 'react-parallax-component';

var user: {
    'userType': 'buyer'
}
ReactDOM.render(
    <div>
        <NavigationBarComponent userType='buyer' />
    </div>,
    document.getElementById("root")
);

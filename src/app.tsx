import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloJoey from "./components/helloComponent";
import LoginComponent from "./components/loginComponent";
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';

ReactDOM.render(
    <div>
        <LoginComponent />

    </div>,
    document.getElementById("root")
);

import * as React from "react";
import * as ReactDOM from "react-dom";

import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import {loginState, aboutState} from './routes/routes';

ReactDOM.render(
    <div>
        <UIRouter plugins={[pushStateLocationPlugin]} states={[loginState, aboutState]}>
            <div>

              <UISrefActive class="active">
                <UISref to="login"><a>Hello</a></UISref>
              </UISrefActive>
              <UISrefActive class="active">
                <UISref to="about"><a>About</a></UISref>
              </UISrefActive>

              <UIView/>
            </div>
        </UIRouter>
    </div>,
    document.getElementById("root")
);

import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloJoey from "./components/helloComponent";
import LoginComponent from "./components/loginComponent";
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import store from "./redux/store/store"

store.dispatch({type: "LOG_IN", payload: "DO IT"});



var active = {
    color:"red",
    fontWeight:"bold"
};
var helloState = {
  name: 'hello',
  url: '/login',
  component: LoginComponent
}

var aboutState = {
  name: 'about',
  url: '/about',
  component: () => <h3>Its the UI-Router hello world app!</h3>,
  onEnter: () => {console.log("on enter");},
  onExit: () => {console.log("neat exiting see ya");}
}
ReactDOM.render(
    <div>

        <UIRouter plugins={[pushStateLocationPlugin]} states={[helloState, aboutState]}>
            <div>
              <UISrefActive class="active">
                <UISref to="hello"><a>Hello</a></UISref>
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

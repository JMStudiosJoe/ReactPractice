import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloJoey from "./components/helloComponent";
import LoginComponent from "./components/loginComponent";
import store from "./redux/store/store"

ReactDOM.render(
    <div>

        <LoginComponent />
        <HelloJoey name="Joseph" />
    </div>,
  document.getElementById("root")
);

import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloJoey from "./helloComponent";
import LoginComponent from "./loginComponent";

ReactDOM.render(
    <div>
        <LoginComponent />
        <HelloJoey name="Joseph" />
    </div>,
  document.getElementById("root")
);

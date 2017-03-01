import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloJoey from "./helloComponent";
import LoginComponent from "./loginComponent";

ReactDOM.render(
    <div>
  <LoginComponent username="here we gonen" password="working?" />
  <HelloJoey name="my name bitch" />
  </div>,
  document.getElementById("root")
);

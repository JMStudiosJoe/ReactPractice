// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import HelloJoey from "./helloComponent";
//
// ReactDOM.render(
//   <HelloJoey name="Joseph Richardson" />,
//   document.getElementById("root")
// );

import { sayHello } from "./helloComponent";
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("root", "Joseph");

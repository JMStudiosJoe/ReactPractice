import * as React from "react";
import * as ReactDOM from "react-dom";
import {ReactStateDeclaration, UIView} from 'ui-router-react';
import LoginComponent from '../components/loginComponent';

export const loginState:ReactStateDeclaration = {
    name: 'login',
    url: '/login',
    component: LoginComponent
}
export const aboutState:ReactStateDeclaration = {
    name: 'about',
    url: '/about',
    component: () => <h3>Its the UI-Router hello world app!</h3>,
    onEnter: () => {console.log("on enter");},
    onExit: () => {console.log("neat exiting see ya");}
}

// export module States {
//
//     var helloState: ReactStateDeclaration  = {
//       name: 'hello',
//       url: '/login',
//       component: LoginComponent
//     }
//
//     var aboutState: ReactStateDeclaration = {
//       name: 'about',
//       url: '/about',
//       component: () => <h3>Its the UI-Router hello world app!</h3>,
//       onEnter: () => {console.log("on enter");},
//       onExit: () => {console.log("neat exiting see ya");}
//     }
// }

// module StateModule {
//     export class StateClass implements ReactStateDeclaration {
//         loginState: {
//             name: 'login',
//             url: '/login',
//             component: LoginComponent
//         }
//     }
// }

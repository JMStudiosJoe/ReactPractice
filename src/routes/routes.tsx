import * as React from "react";
import * as ReactDOM from "react-dom";
import {ReactStateDeclaration, UIView} from 'ui-router-react';
import LoginComponent from '../components/loginComponent';
import ProjectsComponent from '../components/projectsComponent';

export var loginState:ReactStateDeclaration = {
    name: 'login',
    url: '/login',
    component: LoginComponent
}
export var aboutState:ReactStateDeclaration = {
    name: 'about',
    url: '/about',
    component: () => <h3>Its the UI-Router hello world app!</h3>,
    onEnter: () => {console.log("on enter");},
    onExit: () => {console.log("neat exiting see ya");}
}

export var projectsState:ReactStateDeclaration = {
    name: 'projects',
    url: '/projects',
    component: ProjectsComponent
}

export var contactState:ReactStateDeclaration = {
    name: 'contact',
    url: '/contact',
    component: () => <h3>the contact page</h3>,
    onEnter: () => {console.log("on enter contact");},
    onExit: () => {console.log("neat exiting contact see ya");}
}

export var homeState:ReactStateDeclaration = {
    name: 'home',
    url: '/home',
    component: () => <h3>the home page</h3>,
    onEnter: () => {console.log("home on enter");},
    onExit: () => {console.log("neat exiting home see ya");}
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

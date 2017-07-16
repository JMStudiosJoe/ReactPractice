import * as React from "react"
import * as ReactDOM from "react-dom"
import {ReactStateDeclaration, UIView} from 'ui-router-react'
import HomeComponent from '../components/helloComponent'
import AboutComponent from '../components/aboutComponent'
import ProjectsComponent from '../components/projectsComponent'
import ContactComponent from '../components/contactsComponent'
import TeamComponent from '../components/teamComponent'
export const aboutState:ReactStateDeclaration = {
    name: 'about',
    url: '/about',
    component: AboutComponent,
    onEnter: () => {console.log("on enter")},
    onExit: () => {console.log("neat exiting see ya")}
}
export const teamState:ReactStateDeclaration = {
    name: 'team',
    url: '/team',
    component: TeamComponent,
    onEnter: () => {console.log("team component on enter")},
    onExit: () => {console.log("team component neat exiting see ya")}
}

export var projectsState:ReactStateDeclaration = {
    name: 'projects',
    url: '/projects',
    component: ProjectsComponent
}

export var contactState:ReactStateDeclaration = {
    name: 'contact',
    url: '/contact',
    component: ContactComponent,
    onEnter: () => {console.log("on enter contact")},
    onExit: () => {console.log("neat exiting contact see ya")}
}

export var homeState:ReactStateDeclaration = {
    name: 'home',
    url: '/home',
    component: HomeComponent,
    onEnter: () => {console.log("home on enter")},
    onExit: () => {console.log("neat exiting home see ya")}
}

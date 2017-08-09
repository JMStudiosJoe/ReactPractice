import * as React from 'react'
import store from '../redux/store/store'

import * as style from 'ts-style'
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react'
import {teamState, aboutState, homeState, contactState, projectsState} from '../routes/routes'
import MainHeaderComponent from './mainHeaderComponent'
interface NavigationProps {
    userType: string,
}
interface NavigationBarItem {
    id: number,
    url: string,
    count: number,
    active: boolean
}
interface NavigationBarState {
    home?: NavigationBarItem,
    about?: NavigationBarItem,
    contact?: NavigationBarItem,
    projects?: NavigationBarItem
    team?: NavigationBarItem
}
const mainPageCSS = {
    textAlign: 'center'
}
const navigationBarContainer = {
    padding:'10px',
    margin: '20px',
    textAlign: 'center',
}
const navItem = (color: string) => {
    return style.create({
        marginRight: '20px',
        fontSize: '34px',
        fontFamily: 'Arial',
        display: 'inline-block',
        color: color
    })
}
interface LinkState {
    hover: boolean
}

interface LinkProps {
    name: string
    displayText: string
}
class Link extends React.Component<LinkProps, LinkState> {
    constructor(props: LinkProps) {
        super(props)
        this.state = {
            hover: false
        }
    }
    toggleHoverState(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault()
        this.setState({
            hover: !this.state.hover
        })
    }
    render() {
        let linkStyle = {}
        if (this.state.hover) {
            linkStyle = navItem('blue')
        }
        else {
            linkStyle = navItem('black')
        }
        return (
            <UISrefActive class='active'>
                <UISref to={this.props.name}>
                    <div style={linkStyle}
                         onMouseEnter={(e) => this.toggleHoverState(e)}
                         onMouseLeave={(e) => this.toggleHoverState(e)}>
                         <a>{this.props.displayText}</a>
                    </div>
                </UISref>
            </UISrefActive>
        )
    }
}
class NavigationBarComponent extends React.Component<NavigationProps, NavigationBarState> {
    constructor(props: NavigationProps) {
        super(props)
        this.props = props
        this.state = ({} as NavigationBarState)

    }
    render() {
        return (
            <div>
                <UIRouter plugins={[pushStateLocationPlugin]} states={[aboutState, teamState, contactState, projectsState, homeState]}>

                    <div style={mainPageCSS}>
                        <MainHeaderComponent />
                        <div style={navigationBarContainer}>
                            <Link name='home' displayText='Home' />
                            <Link name='about' displayText='About' />
                            <Link name='team' displayText='The Team' />
                            <Link name='contact' displayText='Contact' />
                            <Link name='projects' displayText='Projects' />
                        </div>
                        <UIView/>
                    </div>
                </UIRouter>
            </div>
        );
    }
}

export default NavigationBarComponent

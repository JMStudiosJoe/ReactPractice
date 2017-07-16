import * as React from "react";
import store from "../redux/store/store";

import * as style from "ts-style";
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import {teamState, aboutState, homeState, contactState, projectsState} from '../routes/routes';
import MainHeaderComponent from './mainHeaderComponent';
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
    padding:"10px",
    margin: "20px",
    textAlign: "center",
};
const navItem = style.create({
    base: {
        marginRight: "20px",
        fontSize: "34px",
        fontFamily: "Arial",
        display: 'inline-block',
        '::hover': {
            color: 'red',
            backgroundColor: 'blue'
        }
    }
})
                                        /*<props passed in, state types? can assign the state type here>*/
class NavigationBarComponent extends React.Component<NavigationProps, NavigationBarState> {
    constructor(props: NavigationProps) {
        super(props);
        this.props = props;
        this.state = ({} as NavigationBarState);

    }
    render() {
        return (
            <div>
                <UIRouter plugins={[pushStateLocationPlugin]} states={[aboutState, teamState, contactState, projectsState, homeState]}>

                    <div style={mainPageCSS}>
                        <MainHeaderComponent />
                        <div style={navigationBarContainer}>
                            <UISrefActive class="active">
                                <UISref to="home"><div style={navItem.base}><a>Home</a></div></UISref>
                            </UISrefActive>
                            <UISrefActive class="active">
                                <UISref to="about"><div style={navItem.base}><a style={navItem}>About</a></div></UISref>
                            </UISrefActive>
                            <UISrefActive class="active">
                                <UISref to="team"><div style={navItem.base}><a style={navItem}>The Team</a></div></UISref>
                            </UISrefActive>
                            <UISrefActive class="active">
                                <UISref to="contact"><div style={navItem.base}><a style={navItem}>Contact</a></div></UISref>
                            </UISrefActive>
                            <UISrefActive class="active">
                                <UISref to="projects"><div style={navItem.base}><a>Projects</a></div></UISref>
                            </UISrefActive>
                        </div>
                        <UIView/>
                    </div>
                </UIRouter>
            </div>
        );
    }
}

export default NavigationBarComponent;

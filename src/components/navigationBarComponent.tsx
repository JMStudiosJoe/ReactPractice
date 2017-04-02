import * as React from "react";
import store from "../redux/store/store";

import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import {loginState, aboutState, homeState, contactState, projectsState} from '../routes/routes';

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
}

const navigationBarContainer = {
    padding:"10px",
    margin: "20px",
    textAlign: "center",
};
const navItem = {

    marginRight: "20px",
    fontSize: "24px"
}
                                        /*<props passed in, state types? can assign the state type here>*/
class NavigationBarComponent extends React.Component<NavigationProps, NavigationBarState> {
    constructor(props: NavigationProps) {
        super(props);
        this.props = props;
        this.state = ({} as NavigationBarState);

        console.log("type of user is: ");
        console.log(this.props.userType);
    }
    render() {
        return (
            <div>
                <UIRouter plugins={[pushStateLocationPlugin]} states={[loginState, aboutState, contactState, projectsState, homeState]}>

                    <div >
                        <div style={navigationBarContainer}>
                            <UISrefActive class="active">
                                <UISref to="home"><a style={navItem}>Home</a></UISref>
                            </UISrefActive>
                            <UISrefActive class="active">
                                <UISref to="login"><a style={navItem}>Hello</a></UISref>
                            </UISrefActive>
                            <UISrefActive class="active">
                                <UISref to="about"><a style={navItem}>About</a></UISref>
                            </UISrefActive>
                            <UISrefActive class="active">
                                <UISref to="contact"><a style={navItem}>Contact</a></UISref>
                            </UISrefActive>
                            <UISrefActive class="active">
                                <UISref to="projects"><a style={navItem}>Projects</a></UISref>
                            </UISrefActive>
                        </div>
                        <h3>This is where the routing html will go, this should stay</h3>

                        <UIView/>
                    </div>
                </UIRouter>
            </div>
        );
    }
}

export default NavigationBarComponent;

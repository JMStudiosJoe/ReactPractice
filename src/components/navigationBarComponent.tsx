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

var navigationBarContainer = {
    backgroundColor:"red",
    padding:"10px"
};
                                        /*<props passed in, state types? can assign the state type here>*/
class NavigationBarComponent extends React.Component<NavigationProps, NavigationBarState> {
    constructor() {
        super();
        this.props = ({} as NavigationProps);
        this.state = ({} as NavigationBarState);
        
        console.log("type of user is: ");
        console.log(this.props.userType);
        
        this.login = this.login.bind(this);
        this.usernameValidator = this.usernameValidator.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);

    }

    usernameValidator = (event: React.ChangeEvent<HTMLInputElement>) => {

        //const username = (event.target as HTMLInputElement).value;

    }

    passwordHandler = (event: React.ChangeEvent<HTMLInputElement>   ) => {
        // const password = (event.target as HTMLInputElement).value;
        // this.setState({
        //     password: password,
        // });
    }

    login = (event: any) => {
        console.log(this.state);
        store.dispatch({type: "LOG_IN", payload: "DO IT"});
    }
    render() {
        return (
            <div>
                <UIRouter plugins={[pushStateLocationPlugin]} states={[loginState, aboutState, contactState, projectsState, homeState]}>
                    <div style={navigationBarContainer}>
                        <UISrefActive class="active">
                            <UISref to="home"><a>Home</a></UISref>
                        </UISrefActive>
                        <UISrefActive class="active">
                            <UISref to="login"><a>Hello</a></UISref>
                        </UISrefActive>
                        <UISrefActive class="active">
                            <UISref to="about"><a>About</a></UISref>
                        </UISrefActive>
                        <UISrefActive class="active">
                            <UISref to="contact"><a>Contact</a></UISref>
                        </UISrefActive>
                        <UISrefActive class="active">
                            <UISref to="projects"><a>projects</a></UISref>
                        </UISrefActive>

                        <UIView/>
                    </div>
                </UIRouter>
            </div>
        );
    }
}

export default NavigationBarComponent;

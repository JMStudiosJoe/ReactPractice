import * as React from "react"
import ParallaxComponent from "./customReactParallax"
import * as style from "react-style"


const toggleRendering = (conditions: Boolean) => {
    const projectItemContainerCSS = {
        padding: "10px",
        margin: "10px",
        fontSize: "16px"
    }


    if( conditions ) {
        return (
            <div style={projectItemContainerCSS}>
                Toggling effect in react
            </div>
        );
    }
    else {
        return (
            <div style={projectItemContainerCSS}>
                Kinda neat tbh.
            </div>
        );
    }

}
const mainHeaderContainer = {
    display: 'inline-block',
    textAlign: 'center',
    fontFamily: 'Arial',
    h1: {
        backgroundColor: 'red'
    }
}
interface MainHeaderState {
    toggleConditional: Boolean
}
class MainHeaderComponent extends React.Component<{}, MainHeaderState> {
    constructor() {
        super();

        this.state = ({
            toggleConditional: true
        } as MainHeaderState);
        this.toggleConditionalEvent = this.toggleConditionalEvent.bind(this);

    }
    toggleConditionalEvent(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        this.setState({
            toggleConditional: !this.state.toggleConditional
        });

    }
    render() {

        return (
            <div style={mainHeaderContainer}>
                <ParallaxComponent />
                <h1>JMStudios</h1>
                <div>
                    <h3>Just Making Solutions Studios</h3>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.setState({
            toggleConditional: true
        });
    }
}

export default MainHeaderComponent;

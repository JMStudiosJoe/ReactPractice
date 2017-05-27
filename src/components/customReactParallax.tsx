import * as React from "react";
const background = '../images/jmstudiosbackground.jpg';

const parallaxClass = {
    backgroundImage: "url(" + {background} + ")",
    height: "500px",
    "background-attachment": "fixed",
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover"
}

const toggleRendering = (conditions: Boolean) => {
    const projectItemContainerCSS = {
        padding: "10px",
        margin: "10px",
        "font-size": "16px"
    }

}
interface ParallaxComponentState {
    toggleConditional: Boolean
    
}
class ParallaxComponent extends React.Component<{}, ParallaxComponentState> {
    constructor() {
        super();

        this.state = ({
            toggleConditional: true
        } as ParallaxComponentState);

    }
    render() {

        return (
            <div style={parallaxClass}>
				hello parallax:w

            </div>
        );
    }
    componentDidMount() {
        this.setState({
            toggleConditional: true
        });
    }
}

export default ParallaxComponent;

import * as React from "react";
const background = '../images/jmstudiosbackground.jpg';

const attachEnum = {
    fixed: 'fixed',
    initial: 'initial'
}


const parallaxClass = {
    backgroundImage: "url(" + {background} + ")",
    height: "500px",
    weight: "500px",
    backgroundAttachment: 'fixed',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "red"
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
				hello parallax

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

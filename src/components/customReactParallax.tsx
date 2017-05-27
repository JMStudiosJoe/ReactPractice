import * as React from "react";
import * as style from "ts-style";
const background = '../images/bamboo-forest-by-rolf-hartbrich.jpg';

const parallaxClass = style.create({
    backgroundImage: `url(${background})`,
    height: "500px",
    width: "500px",
    backgroundColor: 'red',
    backgroundAttach: 'fixed',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

});
console.log(parallaxClass);
const parallaxContainer = {
    backgroundImage: "url('../images/jmstudiosbackground.jpg')",
    height: "1500px",
    width: "1500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const toggleRendering = (conditions: Boolean) => {
    const projectItemContainerCSS = {
        padding: "10px",
        margin: "10px",
        fontSize: "16px"
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
                <img src="../images/bamboo-forest-by-rolf-hartbrich.jpg" />
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

import * as React from "react";
import * as style from "ts-style";
const background = './src/images/bamboo-forest-by-rolf-hartbrich.jpg';
const block = style.create({
    height: "100px",
    backgroundColor: "white"
});
const parallaxClass = style.create({
    backgroundImage: `url(${background})`,
    height: "500px",
    backgroundColor: 'red',
    backgroundAttach: 'fixed',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

});
console.log(parallaxClass);

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
            <div>
                <div style={block}></div>
                <div style={parallaxClass}></div>
                <div style={block}></div>
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

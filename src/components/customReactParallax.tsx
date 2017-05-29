import * as React from "react";
import * as style from "ts-style";

type attachments = "fixed"| "initial"| "inherit"| "unset"| "scroll"| "local";

const block = style.create({
    height: "100px",
    backgroundColor: "white"
});

const imageNames = [
    './src/images/bamboo-forest-by-rolf-hartbrich.jpg',
    './src/images/jmstudiosbackground.jpg',
    './src/images/milky-way.jpg',
    './src/images/space-background.jpg',
    './src/images/water-drop-wallpaper-3.jpg',
    './src/images/space-earth-stratosphere-wallpaper-1.jpg'
];

const shuffleArray = (array: Array<any>) => {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
};

let background = imageNames[0];

const parallaxClass = style.create({
    backgroundImage: `url(${background})`,
    height: "500px",
    backgroundColor: 'red',
    backgroundAttachment:"fixed" as attachments,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

});

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

    getParallaxCSS() {
        let index = Math.floor(Math.random()*10) % imageNames.length;
        background = imageNames[index];
        return  style.create({
            backgroundImage: `url(${background})`,
            height: "500px",
            backgroundColor: 'red',
            backgroundAttachment:"fixed" as attachments,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"

        });

    } 
    render() {

        return (
            <div>
                <div style={block}></div>
                <div style={this.getParallaxCSS()}></div>
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

import * as React from "react";
import * as style from "ts-style";

type attachments = "fixed"| "initial"| "inherit"| "unset"| "scroll"| "local";

const block = style.create({
    height: "100px",
    backgroundColor: "white"
});
interface ParralaxImage {
    path: string
    active: boolean
}
let imageNameData: ParralaxImage[] = [
    {
        path: './src/images/jmstudiosbackground.jpg',
        active: false
    },
    {
        path: './src/images/milky-way.jpg',
        active: false
    },
    {
        path: './src/images/bamboo-forest-by-rolf-hartbrich.jpg',
        active: false
    },
    {
        path: './src/images/space-background.jpg',
        active: false
    },
    {
        path: './src/images/water-drop-wallpaper-3.jpg',
        active: false
    },
    {
        path: './src/images/space-earth-stratosphere-wallpaper-1.jpg',
        active: false
    },
    {
        path: './src/images/autum_trees.jpg',
        active: false
    },
    {
        path: './src/images/bridge-over-the-river.jpg',
        active: false
    },
    {
        path: './src/images/mountains_landscape.jpg',
        active: false
    }
];

let imageNames = [
    './src/images/bamboo-forest-by-rolf-hartbrich.jpg',
    './src/images/jmstudiosbackground.jpg',
    './src/images/milky-way.jpg',
    './src/images/space-background.jpg',
    './src/images/water-drop-wallpaper-3.jpg',
    './src/images/space-earth-stratosphere-wallpaper-1.jpg',
    './src/images/autum_trees.jpg',
    './src/images/bridge-over-the-river.jpg',
    './src/images/mountains_landscape.jpg'
];


let background = imageNames[0];


//not in use
const shuffleArray = (array: Array<any>) => {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        };
let backgroundNameIndex = 0;
const imageNamesLength = imageNames.length;

interface ParallaxComponentState {
    
}
class ParallaxComponent extends React.Component<{}, ParallaxComponentState> {
    constructor() {
        super();
    }
    resetPathActivity() {
        for (let imageData of imageNameData) {
            imageData.active = false
        }
        this.getBackgroundPath()
    }
    getBackgroundPath() {
        for (const imageData of imageNameData) {
            if (!imageData.active) {
                imageData.active = true
                return imageData.path
            }
            else {
                imageData.active = false
            }
        }
        this.resetPathActivity()
    }

    getParallaxCSS() {
        background = this.getBackgroundPath()//imageNames[backgroundNameIndex];
        return  style.create({
            marginTop: "10px",
            marginBottom: "10px",
            backgroundImage: `url(${background})`,
            height: "500px",
            minWidth: "700px",
            backgroundAttachment:"fixed" as attachments,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        });
    } 
    render() {
        return (
            <div>
                <div style={this.getParallaxCSS()}></div>
            </div>
        );
    }
    componentWillMount() {

    }
}

export default ParallaxComponent;

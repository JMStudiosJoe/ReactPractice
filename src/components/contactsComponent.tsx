import * as React from "react";
import * as style from "ts-style";

import ParallaxComponent from "./customReactParallax";


const toggleRendering = (conditions: Boolean) => {
    const projectItemContainerCSS = {
        padding: "10px",
        margin: "10px",
        "font-size": "16px"
    }


    if( conditions ) {
        return (
            <div style={projectItemContainerCSS}>
                almost
            </div>
        );
    }
    else {
        return (
            <div style={projectItemContainerCSS}>
                there
            </div>
        );
    }

}
const block = style.create({
    height: "100px",
    backgroundColor: "red"
});
interface ContactState {
    toggleConditional: Boolean
}
class ContactsComponent extends React.Component<{}, ContactState> {
    constructor() {
        super();

        this.state = ({
            toggleConditional: true
        } as ContactState);
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
            <div>

                <ParallaxComponent />
                <button onClick={this.toggleConditionalEvent}>toggle</button>
                {toggleRendering(!this.state.toggleConditional)}
                <div style={block}></div>
                <div style={block}></div>
                
                <ParallaxComponent />
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

export default ContactsComponent;

import * as React from "react";



const toggleRendering = (conditions: Boolean) => {
    const projectItemContainerCSS = {
        padding: "10px",
        margin: "10px",
        fontSize: "16px"
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
const mainHeaderContainer = {
    display: 'inline-block',
    textAlign: 'center',
    fontFamily: 'Arial'
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

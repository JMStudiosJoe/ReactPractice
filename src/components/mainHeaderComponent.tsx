import * as React from "react"
import ParallaxComponent from "./customReactParallax"
import * as style from "react-style"

const mainHeaderContainer = {
    display: 'inline-block',
    textAlign: 'center',
    fontFamily: 'Arial',
}
interface MainHeaderState {
}
class MainHeaderComponent extends React.Component<{}, MainHeaderState> {
    constructor() {
        super()

    }
    render() {

        return (
            <div>
                <ParallaxComponent />
                <div style={mainHeaderContainer}>
                    <h1>JMStudios</h1>
                    <div>
                        <h3>Just Making Solutions Studios</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainHeaderComponent

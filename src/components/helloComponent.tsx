import * as React from "react";
import ParallaxComponent from "./customReactParallax";

interface HelloProps {
  name: string;
}


class HelloJoey extends React.Component<HelloProps, {}> {
  render() {
    return (
        <div>Hello, {this.props.name}
          <ParallaxComponent />    
       more text 
        </div>
    );
  }
}

export default HelloJoey;

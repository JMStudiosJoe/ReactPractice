import * as React from "react";
import ParallaxComponent from "./customReactParallax";

interface HelloProps {
  name: string;
}


class HomeComponent extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
          Hello, and welcome to JMStudios where my team and I create projects to tackle the problems around us, big or small. Thanks for stopping by hopefully you enjoy the parallax experience.
          <ParallaxComponent />    
        </div>
    );
  }
}

export default HomeComponent;

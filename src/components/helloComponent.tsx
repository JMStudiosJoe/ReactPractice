import * as React from 'react'
import ParallaxComponent from './customReactParallax'
import { cardsContainer, darkCard, lightCard } from './scss/common'

//import { Common } from 'Common/common'
interface HelloProps {
  name: string;
}


class HomeComponent extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div style={cardsContainer()}>

          <div style={darkCard()}>
              <div style={lightCard()}>
              Hello, and welcome to JMStudios where my team and I create projects to tackle the problems around us, big or small. Thanks for stopping by hopefully you enjoy the parallax experience.
              </div>
          </div>
          <ParallaxComponent />    
      </div>
    )
  }
}

export default HomeComponent

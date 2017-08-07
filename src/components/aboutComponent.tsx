import * as React from 'react'
import ParallaxComponent from './customReactParallax'
import { cardsContainer, darkCard, lightCard } from './scss/common'

interface AboutProps {
  
}


class AboutComponent extends React.Component<AboutProps, {}> {
  render() {
    return (
      <div style={cardsContainer()}>
        <div style={darkCard()}>
            <div style={lightCard()}>
              JMStudios is creating projects for problems we encounter locally and some globally. From voting information to local farming. We love what we do and enjoy taking on challenging projects that software has a potential to solve.  
            </div>    
        </div>
        <ParallaxComponent />    
      </div>
    )
  }
}

export default AboutComponent

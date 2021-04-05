import React from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from '../assets/vanta/three.min.js'

class Background extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: 'body',
      THREE: THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: '#101010',
      shininess: 15.00,
      waveSpeed: 0.45
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
    </div>
  }
}

export default Background;
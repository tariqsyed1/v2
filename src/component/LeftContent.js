import React from 'react'
import Typed from 'react-typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/tariq.jpg'
import './panel.css'

class LeftContent extends React.Component {
  componentDidMount() {
    return null
  }
  componentWillUnmount() {
    return null
  }
  render() {
    return (
        <div className="LeftContent">
          <img className="Tariq "src={logo} alt="Tariq" />
          <h1 id="Typed">
            <Typed 
            strings={['Tariq ^10 Syed']}
            typeSpeed={80}
            startDelay={100}
            />
          </h1>
          <p>Toronto, Canada | <a href="mailto:hello@tariqsyed.me">hello@tariqsyed.me</a></p>
        </div>
      );
  }
}

export default LeftContent;
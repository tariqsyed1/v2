import React from 'react'
import Typed from 'react-typed'
import logo from '../assets/img/tariq.png'
import './LeftContent.css'
import './panel.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';


class LeftContent extends React.Component {
  constructor(props) {    
    super(props);
    this.state = {
      location: "Toronto, Canada",
      email: "hello@tariqsyed.me",
      linkedin: "https://www.linkedin.com/in/tariqs1/",
      name: "'Tariq ^10 Syed'",
    }
  }

  render() {
    return (
        <div className="LeftContent">
          <img className="Tariq "src={logo} alt="Tariq" />
          <h1 className="name-leftpane">
            <Typed 
            strings={['Tariq ^10 Syed']}
            typeSpeed={80}
            startDelay={100}
            />
          </h1>
          <p id="Subheading">Toronto, Canada | <a href="mailto:hello@tariqsyed.me">hello@tariqsyed.me</a></p>
          <div id="Icons">
            <a href="https://www.github.com/tariqsyed1/" className="social"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/tariqs1" className="social"><LinkedInIcon /></a>
            <a href="https://drive.google.com/file/d/1FEpV0M9gKq3ngc0khsWNYkaohejwVCQZ/view?usp=sharing" className="social"><DescriptionIcon /></a>
          </div>

        </div>
      );
  }
}

export default LeftContent;
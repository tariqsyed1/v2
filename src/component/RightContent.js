import React from 'react'
import Project from './Project'
import Experience from './Experience'
import './RightContent.css'
import './panel.css'
import wave from '../assets/img/wave.gif'

class RightContent extends React.Component {
  componentDidMount() {
    return null
  }
  componentWillUnmount() {
    return null
  }
  render() {
    return (
        <div className="RightContent">
            <div className='About' data-aos='fade-up' data-aos-delay='300'>
                <p className="hello-text">Hey there! I'm <span id="bold-text">Tariq</span> <img id="wave" src={wave} alt="Wave Emoji" /></p>
                <p>I'm a <span id="bold-text">third year computer science</span> student at <span id="bold-text">York University</span>, currently searching for <span id="bold-text">Summer 2022</span> co-op opportunities.</p>
            </div>
            <div className="Experience" data-aos='fade-up' data-aos-delay='600'>
                <h2 className="header">EXPERIENCE</h2>
                <Experience name="PRN Digital" position="Software Engineer (Co-op)" date="Summer 2021" desc=""/>
                <Experience name="CaseWare" position="Test Developer (Co-op)" date="Winter 2021" desc=""/>
            </div>
            <div className="Projects" data-aos='fade-up' data-aos-delay='900' >
              <h2 className="header" >PROJECTS</h2>
                <Project name="Menubar Calendar" language="JavaScript" link="https://github.com/tariqsyed1/calendar-menubar" description="Displays a dynamically rendered calendar in the menu bar for quick access. Lightweight and cross-platform compatible."/>
                <Project name="YouTube to Spotify" language="Python" link="https://www.github.com/tariqsyed1/youtubetospotify" description="Converts a playlist of YouTube videos to a Spotify playlist using YouTube/Spotify's API."/>
                <Project name="Personal Website" language="React" link="https://github.com/tariqsyed1/v2" description="Built using React to increase online presence and showcase projects."/>
            </div>
            
        </div>
      );
  }
}

export default RightContent;


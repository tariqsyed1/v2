import React from 'react'
import Project from './Project'
import Experience from './Experience'
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
        <div className="RightContent" data-aos='fade-up'>
            <div className='About'>
                <p className="hello-text">Hey there! I'm <span id="bold-text">Tariq</span> <img id="wave" src={wave} alt="Wave Emoji" /></p>
                <p>I'm a <span id="bold-text">third year computer science</span> student at <span id="bold-text">York University</span>.</p>
                
            </div>
            <div className="Experience">
                <h2>EXPERIENCE</h2>
                <Experience name="PRN Digital" position="Software Engineer Intern" date="Summer 2021" />
                <Experience name="CaseWare" position="Test Developer Intern" date="Winter 2021" />
            </div>
            <div className="Projects">
              <h2>PROJECTS</h2>
                <Project name="Calendar Menubar" language="Node.js" link="" description="Displays a dynamically rendered calendar in the menu bar for quick access. Lightweight and cross-platform compatible."/>
                <Project name="Project Name" language="Python" link="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloore magna aliqua."/>
            </div>
            
        </div>
      );
  }
}

export default RightContent;


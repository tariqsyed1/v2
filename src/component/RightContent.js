import React from 'react'
import Project from './Project'
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
                <h1>ABOUT</h1>
                <p>Hey there! I'm Tariq <img id="wave" src={wave} alt="Wave Emoji" /></p> 
                <p>I'm a <span id="bold-text">third year computer science </span> student at <span id="bold-text">York University</span>.
                </p>
                <p>Currently, I'm doing an internship at <span id="bold-text">CaseWare</span> as a <span id="bold-text">Software Developer in Test</span>. This summer, I'm joining <span id="bold-text">PRN Digital</span> as a <span id="bold-text">Software Engineer Intern</span>.</p>
                <p>I'm looking for a <span id="bold-text">Fall 2021</span> internship! You can find my resume <a href="">here</a></p>
            </div>
            <div className="Projects">
              <h1>PROJECTS</h1>
                <Project name="Calendar Menubar" language="Node.js" link="" description="Displays a dynamically rendered calendar in the menu bar for quick access. Lightweight and cross-platform compatible."/>
                <Project name="Project Name" language="Python" link="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloore magna aliqua."/>
            </div>
            
        </div>
      );
  }
}

export default RightContent;


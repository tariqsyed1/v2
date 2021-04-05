import React from 'react'
import './panel.css'

class Project extends React.Component {
  componentDidMount() {
    return null
  }
  componentWillUnmount() {
    return null
  }
  render() {
    return <div>
      <p>
        <span id='bold-text'>{this.props.name}</span> • {this.props.language} • <a href={this.props.link}>Repository</a>
        <p>{this.props.description}</p>
      </p>
    
    </div>
  }
}

export default Project;
import React from 'react'

class Experience extends React.Component {
  componentDidMount() {
    return null
  }
  componentWillUnmount() {
    return null
  }
  render() {
    return (
        <div>
            <p><span id="bold-text">{this.props.name}</span> • {this.props.position} <span id="right-text">{this.props.date}</span></p>
            <p>{this.props.desc}</p>
            
        </div>
      );
  }
}

export default Experience;


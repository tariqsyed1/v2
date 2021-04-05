import React from'react'
import './App.css';
import Background from './component/Background'
import LeftContent from './component/LeftContent'
import RightContent from './component/RightContent'
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration: 1000,
      delay : 100
    })
  }
  render(){
    return(
      <div>
          <div className="App">
            <Background />
            <LeftContent />
            <RightContent />
          </div>
      </div>
      
    )
  }
};
 

export default App;

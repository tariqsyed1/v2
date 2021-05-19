import React from'react'
import './App.css';
import LeftContent from './component/LeftContent'
import RightContent from './component/RightContent'
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration: 1000,
      disable: function() {
        var maxWidth = 992;
        return window.innerWidth < maxWidth;
      }
    });
  }
  render(){
    return(
      <div>
          <div className="App">
            <LeftContent />
            <RightContent />
          </div>
      </div>
      
    )
  }
};
 

export default App;

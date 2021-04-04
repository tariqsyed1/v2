import './App.css';
import Background from './component/Background'

function App() {
  return (
    <div className="App">
      <Background />
      <LeftContent />
      <RightContent />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="LeftContent">
      <h1>Tariq Syed</h1>
      <h4>Toronto, Canada | hello@tariqsyed.me</h4>
    </div>
  );
}

function RightContent() {
  return (
    <div className="RightContent">
      <h1>ABOUT</h1>
      <p>Hey there! I'm Tariq</p>
      <p>I'm a third year computer science student at York University.</p>
      
    </div>
  )
}
 

export default App;

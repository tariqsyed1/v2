import './App.css';

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
    </div>
  )
}

function Background() {
  return (
    null
  );
}
 

export default App;

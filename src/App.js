import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <SideContent />
      <MainContent />
    </div>
  );
}

function SideContent() {
  return (
    <div className="SideContent">
      <h1>Tariq Syed</h1>
      <h4>Toronto, Canada | hello@tariqsyed.me</h4>
    </div>
  );
}

function MainContent() {
  return (
    <div className="MainContent">
      <h1>About</h1>
    </div>
  )
}

function Background() {
  return (
    null
  );
}
 

export default App;

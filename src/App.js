import './App.css';
import './components/StandardButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome! I'm Zach.
        </h1>
        <img
          src={require('./resources/ZachProfPic.jpg')}
          alt="Zach"
          style={{width: 500, height: 500}}
        />
        <p>
          Find me on <a href="https://www.linkedin.com/in/zachary-diaks/"> LinkedIn</a>
          <br/>
          More coming soon!
        </p>
      </header>
    </div>
  );
}

export default App;

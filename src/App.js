import './App.css';
import './components/StandardButton'
import StandardButton from './components/StandardButton';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to <code>Zach's Website</code>
        </p>
        <StandardButton></StandardButton>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import PlantButtons from './components/Button/PlantButtons';
import Plant from './components/plant/Plant';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Plant World.
        </p>
        <Plant />
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import PlantButtons from './components/Button/PlantButtons';
import Plant from './components/plant/Plant';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="homepage">
          <p>
            Hello Plant World.
          </p>
          <NavBar />
          {/* <Plant /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
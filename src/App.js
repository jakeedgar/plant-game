import './App.css';
// import PlantButtons from './components/Button/PlantButtons';
// import Plant from './components/plant/Plant';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CreatePlant } from './pages/CreatePlant';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="homepage">
        <NavBar />
        <Router>
            <Routes>
              <Route exact path="/" element={(
                  <HomePage />
              )} />
              <Route path="/CreatePlant" element={(
                  <CreatePlant />
              )} />
            </Routes>
        </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
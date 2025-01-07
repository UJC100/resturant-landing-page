
import './App.css';
import Home from './Components/home';
import About from './Components/About';
import Work from './Components/work';
import Trending from './Components/Trending';

function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Work />
      <Trending/>
    </div>
  );
}

export default App;

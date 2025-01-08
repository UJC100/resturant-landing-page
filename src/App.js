
import './App.css';
import Home from './Components/home';
import About from './Components/About';
import Work from './Components/work';
import Trending from './Components/Trending';
import Contact from './Components/contact';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Work />
      {/* <Trending /> */}
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

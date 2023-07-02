import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Gallery from './components/Gallery/Gallery';
function App() {
  return (
    <div className="App">
      <Navbar image={logo} />
      <Gallery/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Nav';
import Main from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;

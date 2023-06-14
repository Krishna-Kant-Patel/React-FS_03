// import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Routing/Homes';
import Product from './components/Routing/Product';
import Contact from './components/Routing/Contact';
import About from './components/Routing/About';
import Nav from './components/Nav/Nav';
import Electronics from './components/Routing/Electronic';
import Jewelery from './components/Routing/Jewelery';
import WomenClothing from './components/Routing/WomenClothing'
import MenClothing  from './components/Routing/MenClothing';
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Nav/>
      <Routes>
        <Route path="/" element={ <Mainpage/> } />
        <Route path="product" element={ <Product/> } >
          <Route path=''element={<Navigate to='electronic'/>} />
          <Route path='electronic'element={<Electronics/>} />
          <Route path='jewelery'element={<Jewelery/>} />
          <Route path='menclothing'element={<MenClothing/>} />
          <Route path='womenclothing'element={<WomenClothing/>} />
        </Route>
        <Route path="contact" element={ <Contact/> } />
        <Route path="about" element={ <About/> } />
      </Routes>
    </div>
  );
}

export default App;

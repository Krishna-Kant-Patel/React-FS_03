
import './App.css';
import Images from './components/Image';
import Propcomp from './components/card';
import Count from './components/count';


function App() {
  return (
    <div className="App">
      
      <Propcomp name="krishna" gender= "male"/>
      <Count/>
      <Images/>
      
    </div>
  );
}

export default App;

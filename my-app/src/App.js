
import './App.css';
import Images from './components/Image';
import Propcomp from './components/card';
import Count from './components/count';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Profile name= 'krishna'email='krishna@gmail.com' />
      <Profile name = 'Nitin' email= 'Nitin@gmail.com'/>
      <Profile name = 'abhishek' email='abhi@gmail.com' />
      {/* <Propcomp name="krishna" gender= "male"/>
      <Count/>
      <Images/> */}
      
    </div>
  );
}

export default App;

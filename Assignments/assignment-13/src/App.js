import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';



function App() {
  return (
    <div className="App">
      <ItemList/>
      <ItemForm/>
    </div>
  );
}

export default App;

import "./App.css";


import User from "./components/User";

function App(props) {
  return (
    <div className="App">
      <h2 style={{ marginBottom: "30px" }}>Welcome to Redux</h2>
      
      <User/>
    </div>
  );
}

export default App;
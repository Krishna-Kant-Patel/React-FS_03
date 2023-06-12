// import logo from "./logo.svg";
import "./App.css";
import { useContext, useState } from "react";
import Nav from "./Components/Nav/Nav";
// import Image from "./Components/ImageComp/Image";
// import Text from "./Components/TextComp/Text";
// import A from "./Components/Context/A";
// import Personal from "./Components/Profile/personal";
import Home from "./Components/ContextProvider/Home";
import Login from "./Components/ContextProvider/Login";
import ContextApi from "./Components/ContextProvider/CustomContext";



function App(props) {
  // const [showImage, setShowImage] = useState(false);
  // const [islogedin, setState] = useState(false);

  // const login =() =>{
  //   setState(true)
  // }
  // const logout =() =>{
  //   setState(false)
  // }
  const {islogedin} = useContext(ContextApi)

  return (
    <div className="App">
      <Nav/>
      {islogedin ? <Home /> : <Login />}
      {/* <Personal/> */}
      {/* <A/> */}
      {/* <div style={{ margin: "50px auto" }}>
        <button
          onClick={() => {
            setShowImage(true);
          }}
        >
          Show Image
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            setShowImage(false);
          }}
        >
          Show Text
        </button>
      </div>
      {showImage ? <Image /> : <Text />} */}
    </div>
  );
}

export default App;
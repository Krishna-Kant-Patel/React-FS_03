// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
// import Image from "./Components/ImageComp/Image";
// import Text from "./Components/TextComp/Text";
// import A from "./Components/Context/A";
import Personal from "./Components/Profile/personal";
function App(props) {
  // const [showImage, setShowImage] = useState(false);

  return (
    <div className="App">
      <Nav />
      <Personal/>
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
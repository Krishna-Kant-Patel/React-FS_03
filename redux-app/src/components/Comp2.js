import {useState} from "react";
import myReduxStore from "../Store/Store";

function Comp2(props) {
    const [state, setState] = useState('')
    const submitdata = () => {
        var myAction = {
          type: "comp2",
          payload: state,
        };
        myReduxStore.dispatch(myAction);
      };
  return (
    <div>
      <h2>Comp - 2</h2>
      <input type="text" placeholder="Enter text" onChange={((e)=>{
        setState(e.target.value)})}/>
      <button onClick={submitdata}>Submit</button>
    </div>
  );
}

export default Comp2;
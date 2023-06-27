import React from "react";
import { UseSelector, useSelector } from "react-redux";
function Result(props) {
  let Data = useSelector((store)=>{
    return store
  })  
  return (
    <div>
      <h2>Result</h2>
      <p>Component - 1 : {Data.comp1}</p>

      <p>Component - 2 : {Data.comp2}</p>
    </div>
  );
}

export default Result;
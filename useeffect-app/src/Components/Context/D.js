// import { useState } from "react";
import { useContext } from "react";
import myContext from "./myContext";


function D(prop){
    let Data  = useContext(myContext)

    return <>
        <h1>Component D</h1>
        <p>Data: {Data}</p>
    </>
}
export default D;
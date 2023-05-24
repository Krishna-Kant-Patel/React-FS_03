import { useState } from "react";
import './head.css'
function Count(){
 const [count, setState] = useState(0)
 const inc = () =>{
    setState(count+1)
 }
 const dcs = () =>{
    setState(count-1)
 }
    return <>
        <div className="count">
            <button onClick={inc}>increament</button>
            <h2>Count: {count}</h2>
            <button onClick={dcs}>decrease</button>
        </div>
    </>
}
export default Count;
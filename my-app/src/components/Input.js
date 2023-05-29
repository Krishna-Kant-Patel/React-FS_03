import { useState } from "react";
import './head.css'
function Inc(){
 let [str, setState] = useState()
 
 const dcs = () =>{
    let st = document.getElementById('kk').value
    setState(st)
 }
    return <>
        <div className="count" style={{backgroundColor : 'whitesmoke'}}>
            <input id="kk" type="text" onChange={(event)=>{
                
            }}/> 
            <p>{str}</p>

        </div>
    </>
}
export default Inc;
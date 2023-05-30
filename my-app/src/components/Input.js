import { useState } from "react";
import './head.css'
function Inc(){
 let [str, setState] = useState()
 

    return <>
        <div className="container" style={{backgroundColor : 'whitesmoke'}}>
            <input id="kk" type="text" onChange={(event)=>{setState(event.target.value)}}/> 
            <p>{str}</p>

        </div>
    </>
}
export default Inc;
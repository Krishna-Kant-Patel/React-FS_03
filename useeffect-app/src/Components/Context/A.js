import { useState } from "react";
import myContext from "./myContext";

import B from "./B";

function A(){
    const [state, setState] = useState('Geeks')
    const [inputs, inState] = useState('')
    // var name = ''

    return <>
        <h1>Component A</h1>
        <input type="text" onChange={((event)=>
        inState(event.target.value))} />
        <button onClick={(()=>{
            setState(inputs)

        })}>Click me</button>
        <hr/>
        {/* <B Name= {state}/> */}
        <myContext.Provider value = {state}>
            <B/>
        </myContext.Provider>
        
    </>
}
export default A;
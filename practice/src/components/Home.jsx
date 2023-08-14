import {useState } from 'react'

function Home(){
const [colors, SetColors] = useState('');

const [length, setLength] = useState('');

    return<>
    <div style={{height: "300px", width:"300px", margin:"auto" }}>
        <select name="" onChange={((e)=> SetColors(e.target.value))} >
            <option value="red">Red</option>
            <option value="yellow">yellow</option>
            <option value="blue">Blue</option>
        </select>
        <textarea style={{color:`${colors}`}} onChange = { ((e)=> setLength(e.target.value))} name="" id="" cols="30" rows="10">enter text</textarea>
        <p>{length.length}</p>
    </div>
    </>
}

export default Home;
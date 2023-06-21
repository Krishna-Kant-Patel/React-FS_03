import './style.css'
import { useState } from 'react'


function Forms(){
    const [data, setData] = useState({})

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        console.log(data)
    }


    return <>
    <form className="forms" onSubmit={submit}>
        <label htmlFor="username" >User Name</label>
        <input id='username'name='name' onChange={updateData} type="text" />
        <label htmlFor="password">password</label>
        <input id='password' name='password' onChange={updateData} type="password" placeholder="Enter Password" />
       <div className="radios">
       <input type="radio" name="gender" onChange={updateData} id="" value='Male' />Male
        <input type="radio" name="gender" onChange={updateData} id=""value='female'/>Female
        <input type="radio" name="gender" onChange={updateData} id="" value='Other' />other
       </div>
       <textarea name="textarea" name='Address' onChange={updateData} id="textbox" cols="30" rows="5">enter text</textarea>
       <div className="check">
        <input type="checkbox" name="skills" onChange={updateData} value="HTML"  id="" />Html
        <input type="checkbox" name="skills" onChange={updateData} value="CSS" id="" />CSS
        <input type="checkbox" name="skills" onChange={updateData} value="REACT" id="" />REACT
       </div>

        <button type="submit">Submit</button>
    </form>
    </>
}

export default Forms
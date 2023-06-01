import { useState } from 'react';

import React from 'react';
import './head.css'
import {sendData} from './API/User';


function Users(){
    const [userData, setUser] = useState()
    const [gender, setGender] = useState()
    function GetData(){
        console.log(userData, gender)
        let Fdata = {
            name: userData,
            gender: gender
        }
        sendData(Fdata)

    }

    function GetUser(){
        
    }

    return <>
        <div className="Users">
            <h2>New User</h2>
            <input type="text"  onChange={((event)=>{
                setUser(event.target.value)
            })} />
            <div className='radionbtn'>
            <input type="radio" name="radio" value="Male" onChange={((event)=>{
                setGender(event.target.value)
            })}/>Male
            <input type="radio" name="radio" value="Female" onChange={((event)=>{
                setGender(event.target.value)
            })} />Female
            </div>
            <button onClick={GetData}>Add User</button>
            <button onClick={GetUser}>Get User</button>
        </div>
    </>
}
export default Users;
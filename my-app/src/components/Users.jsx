import { useState } from 'react';

import React from 'react';
import './head.css'
import {sendData, getUsersData, deleteUserData, PutUserData} from '../API/User';


function Users(){
    const [userData, setUser] = useState()
    const [gender, setGender] = useState()
    const [users, setUsers] = useState([]);
    const [city, setCity] = useState('');
    function GetData(){
        console.log(userData, gender)
        let Fdata = {
            name: userData,
            gender: gender
        }
        sendData(Fdata, setUsers)

    }
    function PutData(ids, Name, Gender){

        let putUser ={
            name:Name,
            gender: Gender,
            city:city
        }
        PutUserData(ids, putUser)
    }

    function GetUser(){
        getUsersData(setUsers);
    }

    const deleteUser = (id) => {
        deleteUserData(id, setUsers);
      };

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
            <div className="btns">
            <button onClick={GetData}>Add User</button>
            <button onClick={GetUser}>Get User</button>
            </div>

            
      <div>
        {users.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>GENDER</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>
                    <input type="text" name="" id="" onChange={(event)=>{
                        setCity(event.target.value)
                    }} />
                    <button onClick={()=>{
                        PutData(user.id, user.name, user.gender )
                    }}>Put</button>
                      <button
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
        </div>
    </>
}
export default Users;
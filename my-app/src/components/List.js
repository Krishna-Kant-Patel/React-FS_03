import { useState } from "react";

function Item(){
    const [Users, setState] = useState([])

    const getUsers = () =>{
        fetch('https://randomuser.me/api/?results=20')
        .then((res) => res.json())
        .then((data) => {
            setState(data.results)
        })
        .catch(()=>{
            console.log("error happens")
        })
    }

    return (
    <div style={{padding:'50px'}}>
    <h1>User informations</h1>
    <br/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore animi blanditiis aut eos recusandae consectetur, nulla unde repudiandae suscipit obcaecati itaque ratione nobis dicta eius, consequuntur, mollitia saepe vitae molestias!</p>

     <button onClick={getUsers}>Get User</button>
     {Users.length>0 && (
        <table width="100%" frame='box' rules="all">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Users.map((ele)=> {
                            return (
                                <tr>
                                    <th>
                                        <img src={ele.picture.medium} width={100} height={100}  alt="" srcset="" />
                                    </th>
                                    <th>{ele.name.first} {ele.name.last}</th>
                                    <th>{ele.gender}</th>
                                    <th>{ele.email}</th>
                                    <th>{ele.location.city}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            
        </table>
     )

     }
    </div>)
}
export default Item
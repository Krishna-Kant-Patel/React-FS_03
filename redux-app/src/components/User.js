import myReduxStore from "../Store/Store"
import { getUsersData, sendData } from "../ApiCalls/ApiCall"
import { useState, useEffect } from "react"
import { UseSelector, useSelector } from "react-redux";
import './style.css'


function Users(){
const [userdata, setUserdata] = useState()
const [data, setData] = useState({
    name:"",
    gender:""
})


const updatedata = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });}


useEffect(()=>{
    getUsersData(setUserdata)
    
},[])


const submitData = () => {
    var myAction = {
        
        type: "user",
        payload: userdata,
      };
      myReduxStore.dispatch(myAction);
  };

  let finaldata = useSelector((store)=>{
    return store
  }) 

    return <>
    <div className="container" >
        <div className="btn" >
        <input type="text" name="name" onChange={updatedata}/>
        
        </div>
        <div className="Rcont" >
            <input type="radio" name="gender" id="" value='Male' onChange={updatedata} />Male
            <input type="radio" name="gender" id="" value='Female' onChange={updatedata} /> Female
        </div>
        <button onClick={(()=>{
            sendData(data, setUserdata)
            console.log(finaldata)
            
            submitData()
            
        })}>Send</button>


     {finaldata.user.length>0 && (
        <table width="50%" frame='box' rules="all">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    
                </tr>
                </thead>
                <tbody>
                    {
                        finaldata.user.map((ele)=> {
                            return (
                                <tr>
                                    
                                    <th>{ele.name} </th>
                                    <th>{ele.gender}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            
        </table>)}
    
    

        
    </div>
    </>
}

export default Users
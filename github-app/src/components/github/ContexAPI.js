import { createContext, useState } from "react";
import App from "../../App";
const ContextApi = createContext()

export default ContextApi


export function CustomProvider(){
    const [usersdata, setUsers] = useState();

    

  
  return (<ContextApi.Provider value={{setUsers, usersdata}}>
       <App/>
  </ContextApi.Provider>)
}
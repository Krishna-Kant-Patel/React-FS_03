import { createContext, useState, Children } from "react";


const ContextApi = createContext()

export default ContextApi


export function CustomProvider({children}){
    const [islogedin, setState] = useState(false);

  const login =() =>{
    setState(true)
  }
  const logout =() =>{
    setState(false)
  }
  return (<ContextApi.Provider value={{islogedin, login, logout}}>
       {children}
  </ContextApi.Provider>)
}
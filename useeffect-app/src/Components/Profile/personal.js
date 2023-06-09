import { useState } from "react";
import { studentData } from "../API/apis";
import dataContext from "./context";
import Education from "./educational";


function Personal(){
const [student, setData] = useState([])

studentData(setData)

   return <>
   <h1>Personal Component</h1>
   <dataContext.Provider value={student}>
    <Education/>
   </dataContext.Provider>

   </>
}
export default Personal
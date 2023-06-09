
import { useContext } from "react"
import dataContext from "./context"


function Education(){
    let info = useContext(dataContext)

    return <>
        <div>
            <h2>SSC</h2>
            <h2>intermediate</h2>
            <h2>Bachelor</h2>
            <p>Degree: {info.degree}</p>
            <p>Percentage: {info.percentage}%</p>
        </div>
    </>
}
export default Education
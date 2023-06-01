
import axios from "axios";



export const sendData = (Data) => {
    axios.post('http://localhost:5001/results', Data)
    .then(() => {
        alert("user added succesfully")
    })
    .catch(()=>{
        alert("User not added")
    })
}


import axios from "axios";
import myReduxStore from "../Store/Store";

export const getUsersData = (setUsers) => {
    axios.get("http://localhost:5001/Data").then((res) => {
    //   console.log(res);
      setUsers(res.data);
      var mAction = {
        
        type: "users",
        payload: res.data,
      };
      myReduxStore.dispatch(mAction);
    });
  };


  export const sendData = (Data, setUsers) => {
    axios.post('http://localhost:5001/Data', Data)
    .then(() => {
        alert("user added succesfully")
        getUsersData(setUsers);
    })
    .catch(()=>{
        alert("User not added")
    })
}
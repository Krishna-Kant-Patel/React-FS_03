
import axios from "axios";

export const getUsersData = (setUsers) => {
    axios.get("http://localhost:5001/results").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  };

export const sendData = (Data, setUsers) => {
    axios.post('http://localhost:5001/results', Data)
    .then(() => {
        alert("user added succesfully")
        getUsersData(setUsers);
    })
    .catch(()=>{
        alert("User not added")
    })
}

export const deleteUserData = (id, setUsers) => {
    axios
      .delete(`http://localhost:5001/results/${id}`)
      .then(() => {
        alert("Removed User Successfully");
        getUsersData(setUsers);
      })
      .catch(() => {
        alert("Failed to Remove the Users");
      });
  };

  export const PutUserData = (id, PutData) =>{
    axios.put(`http://localhost:5001/results/${id}`, PutData)
    .then((res) => {
        // updatedAt: res.data.updatedAt
        alert("Data put successfully")
    })
  }

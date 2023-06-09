import axios from "axios";

export const studentData = (setData) => {
    axios.get("http://localhost:5001/Data").then((res) => {
    //   console.log(res);
      setData(res.data[0]);
    });
  };
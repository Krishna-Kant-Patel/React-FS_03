import "./Nav.css";
import ContextApi from "../ContextProvider/CustomContext";
import { useContext } from "react";
function Nav() {
  const {islogedin, logout} = useContext(ContextApi)
  return (
    <div className="nav">
      <div className="title flexC">
        <h2>GEEKSTER</h2>
      </div>

      <div className="menu flexC">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Products</a>
        <a href="#">ContactUs</a>
        {islogedin ? <button onClick={logout}>Log out</button> : null}
      </div>
    </div>
  );
}

export default Nav;
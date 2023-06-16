import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <div className="title flexC">
        <h2>KRISHNA</h2>
      </div>

      <div className="menu flexC">
        <Link to='/'>Home</Link>
        <Link to='product'>Product</Link>
        <Link to='about'>About</Link>
        <Link to='cart'>Cart</Link>
      </div>
    </div>
  );
}

export default Nav;
import React from "react";
import "./Nav.css"
function Navbar(props){
    return(
        <div id="main">
            <div style={{fontSize:"45px",}}>logo</div>
            <div className="menu" >
                <a href="#">home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div id="three">
                <div ><i className="fa-brands fa-facebook-f" style={{color: "#696369"}}></i></div>
                <div><i class="fa-brands fa-twitter" style={{color: "#74777b"}}></i></div>
                <div><i class="fa-brands fa-instagram" style={{color: "#929396"}}></i></div>
            </div>
             
        </div>
    );
}
export default Navbar;
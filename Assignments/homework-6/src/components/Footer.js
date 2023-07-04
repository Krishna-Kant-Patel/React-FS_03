import React from "react";
function Footer(props){
    var style ={
      display:"flex",
      backgroundColor:"Grey",
      justifyContent:"space-between",

    }
    return(
        <div style={style }>
            <div style={{color:"white",margin:"15px"}}>
                <h3>BLOCK HEADER</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             </div>
             <div style={{color:"white",margin:"15px"}}>
                <h3>BLOCK HEADER</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             </div>
             <div style={{color:"white",margin:"15px"}}>
                <h3>BLOCK HEADER</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             </div>
            
        </div>
    );
}
export default Footer;
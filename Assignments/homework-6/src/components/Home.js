import React from "react";
var ele1 ={
    width:"40%",
    margin:"15px",
   marginTop:"10%"
}
var eleM ={
    height:"460px",
   
    display:"flex"
}
function Main(props){
    return(
        <div style={eleM}>
             <div style={ele1}>
                <h1 style={{marginLeft:"15%"}}>Header <br/> Footer</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

             </div>
             <div style={{width:"60%",margin:"15px"}}>
                <div style={{justifyContent:"center",textAlign:"center",marginTop:"5px"}}>
                <img src ="https://tse2.mm.bing.net/th?id=OIP.QFbmIj4qavBWzGIBAFY50wHaE7&pid=ImgDet&rs=1"
                   height="420px" width=" 500px" 
                />
                </div>
             </div>
        </div>
    );
}
export default Main;
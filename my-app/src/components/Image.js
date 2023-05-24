import { useState } from "react";
import './head.css'
function Images(){
 const [Img, setState] = useState('https://img.freepik.com/premium-vector/3d-paper-circle-clean-circuit-board-background_62391-135.jpg?w=1060')
 const img1 = () =>{
    setState('https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?w=1060&t=st=1684943586~exp=1684944186~hmac=daaf54335c8adb75e98dfe241570118fe44d137399efdd15250a50408d917266')
 }
 const img2 = () =>{
    setState('https://img.freepik.com/free-vector/copy-space-blue-circuits-digital-background_23-2148821699.jpg?w=1060&t=st=1684942990~exp=1684943590~hmac=2c0fa46c4bbe8bb515d589b46f6ba7c5cf8ecd6383c8b1fd82b530a2d52068e1')
 }
 const img3 =() =>{
    setState('https://img.freepik.com/free-vector/abstract-digital-technology-background-with-network-connection-lines_1017-25552.jpg?w=1380&t=st=1684943026~exp=1684943626~hmac=2de1678ec89b43ddbffcfda1cf66c475d7235b4ac8bdf101ed47e81317706073')
 }
    return <>
        <div className="Image">
           <img src={Img} height={200} width={200} alt="" />
           <div className="btn">
              <button onClick={img1}>Image-1</button>
            
              <button onClick={img2}>Image-2</button>
              <button onClick={img3}>Image-3</button>
            </div>
        </div>
    </>
}
export default Images;
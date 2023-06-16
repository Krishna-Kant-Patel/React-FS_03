import {  useState } from "react";
import axios from 'axios';
import './style.css'


function Productss(){
 const [getdata, setData] = useState()
 let pData = {}
 axios.get("http://localhost:5001/data")
 .then((res)=>{
    setData(res.data)
    // console.log(res.data)
 })
 .catch(()=>{
    console.log("error")
    
 })

 function getInfo(ids){
    axios.get("http://localhost:5001/data")
    .then((res)=>{
         const dd = res.data.filter((item) => {
          return item.id===ids
          
       })
        pData = dd[0]
           axios.post('http://localhost:5001/cart', pData)
           .then(() => {
               alert("Product added succesfully")
           })
           .catch(()=>{
               alert("Product not added")
           })
       
    })
    .catch(()=>{
       console.log("error")
       
    })
 }

    return <>
      <h1 style={{color: "red"}}>Product Component</h1>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex omnis doloribus laudantium repellendus dignissimos deleniti quasi fuga, dolorum, corporis illo, sapiente id magni! Blanditiis fugiat pariatur amet sint explicabo! Illo labore molestiae, natus praesentium ab perferendis similique eligendi harum distinctio consectetur quasi eos eum iusto amet minus aliquid neque aperiam earum aliquam totam odio itaque est in? Numquam, recusandae nam sed maiores debitis qui magnam quos consequatur, facilis, laudantium ullam? Temporibus accusantium natus ullam non dolorem ratione quis reiciendis facere suscipit, quod, dolores iure dolor obcaecati omnis ex neque exercitationem ducimus voluptatum? Deleniti perspiciatis dolor quasi eius tempora corporis quos sint nam maiores? Nostrum perspiciatis voluptates adipisci animi voluptas, laudantium ut, cumque nulla, ad quae dolorem? Deleniti dolor necessitatibus est incidunt cum esse laudantium laborum quasi qui dignissimos facilis accusamus ullam excepturi laboriosam porro nihil totam quidem cumque, illum modi non vero distinctio. Quos soluta officiis dolore veritatis corporis tenetur quae, iure cupiditate ipsa quisquam pariatur magni quasi ab voluptatem dicta blanditiis cumque sequi, id eius. Voluptas tenetur nostrum molestiae officiis dolor doloribus, voluptatum architecto recusandae voluptatem quasi. Perferendis rerum nam debitis a numquam error vitae exercitationem quia commodi alias reprehenderit ipsam quasi similique tempore, quisquam laudantium? Maxime mollitia totam error beatae quasi minus fugit explicabo ipsa nihil aspernatur placeat odio modi quia doloremque voluptate quo fugiat esse rem, dolor cumque. Alias atque, illo sint expedita, nostrum maiores dolorum voluptas dolor voluptatibus, quia possimus similique iure sit! Itaque iste molestias sequi voluptate minus recusandae velit quas labore ipsa in.</p>
    <div className="Pcontainer">
        {getdata &&
        getdata.map((ele) =>{
            return <>
            <div className="card">
                <img src={ele.image} alt="" />
                <p>{ele.title}</p>
                <p>Price : $ {ele.price}</p>
                <button onClick={(()=>{
                    getInfo(ele.id)

                })}>Add to Cart</button>
            </div>
                </>
        })

        }
    </div>
    
    </>
}

export default Productss;
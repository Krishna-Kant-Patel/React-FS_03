import axios from 'axios'
import { useState } from 'react'
import './style.css'

function Cart(){
    const [cartdata, setCart] = useState()
    function getcart(){axios.get('http://localhost:5001/cart')
    .then((res) => {
       setCart(res.data)
       console.log(res.data[0].title)
    })
    .catch(()=>{
        console.log("error")
    })}
    getcart()

    const deleteData = (id) => {
        axios
          .delete(`http://localhost:5001/cart/${id}`)
          .then(() => {
            alert("Product Removed from cart Successfully");
            
          })
          .catch(() => {
            alert("Failed to Remove the Product");
          });
      };

    return <>
      <h1 style={{color: "red"}}>Cart Products</h1>
      <br/>
      {/* <button onClick={getcart}>get data</button> */}
    <div className="cartcontainer">
        
        {cartdata &&

        cartdata.map((item) => {
            // console.log(item.title);
            return <>
            <div className="cart">
                <img className='productimage' src={item.image} alt="" />
                <div className="productInfo">
                <h2>Title : {item.title}</h2>
                <h3>Price : $ {item.price}</h3>
                <p>Description : {item.description}</p>
                <p>Category : {item.category}</p>
                <p>Rating : {item.rating.rate} <span className="fa fa-star checked"></span></p>
                <button className='Rbtn' onClick={(()=>{
                    deleteData(item.id)
                })}>Remove</button>
                
                </div>
            </div>
            </>
        })

        }
    </div>
    
    </>
}

export default Cart;
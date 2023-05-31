import { useState } from "react";
import axios from 'axios';

function Products(){
    const getProduct = () =>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data)
            
            
        })
        .catch(()=>{
            console.log("Error")
        })

        
}
return <>
        <h1>Hello World</h1>
            <button onClick={getProduct} >Send</button>
        </>
}
export default Products

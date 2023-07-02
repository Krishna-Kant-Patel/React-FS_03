
import { useEffect, useState } from "react";
import './style.css'

function Gallery(){
    const [images, setImages] = useState([]);

    useEffect(()=>{
        fetch("https://api.unsplash.com/photos?page=1&client_id=5F0a8RSv_dTlmVl1IXrXmJ0zuI1a4CeGB0QkZ9Y3Btc")
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            setImages(data)
        })
        .catch(()=>console.log("error occurs"))
    })

    return <>
        
    <div className="container">
        {images &&
        images.map((ele)=>{
            return <>
            <div className="imagecard">
                    <img className="image" src={ele.urls.full} alt="" srcset="" />
                
            </div>
            </>
        })
        }
    </div>
    </>

}
export default Gallery;
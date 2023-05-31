import './style.css'



function Card(prop){

    return <>
        <div className="card">
            <img className='Image' src={prop.img} alt="" srcset="" />
            <h1>{prop.number}</h1>
            <p className='card-info'>{prop.infor}</p>
        </div>
    </>
}
export default Card;
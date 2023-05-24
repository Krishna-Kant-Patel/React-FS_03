import './head.css'


function Propcomp(prop){

    return <>
        <div className="card">
            <img src="" alt="" />
            <br />
            <h1>{prop.name}</h1>
            <br />
            <h1>Gender: {prop.gender}</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non assumenda
             libero cupiditate perspiciatis! Velit repellendus eligendi quis, consectetur 
             delectus quos aut perferendis soluta ab ipsum veniam, ducimus ad accusamus animi!</p>
        </div>
    </>
}
export default Propcomp;
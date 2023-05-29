import './head.css'

function Profile(prop){

    return <>
        <div  className="container">
            <div>
                <img height={200} width ={200} src={prop.src} alt="" />
            </div>
            
                <h1>Name: {prop.name}</h1>
                <br/>
                <button>Details</button>
                
            
        </div>
    </>
}
export default Profile
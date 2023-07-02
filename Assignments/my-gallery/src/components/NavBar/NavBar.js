
import './style.css'
function Navbar(prop){

    return<>
    <div className="nav">
        <div className="logo">
            <img src={prop.image} alt="" />
            <h2>My Gallery App</h2>
        </div>
        <div className="menu">
            <input type="text" />
            <button>Search</button>
        </div>

    </div>

    
    </>
}
export default Navbar;
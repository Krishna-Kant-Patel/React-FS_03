import './style.css'
function NavBar(){
    return<>
    <div className="nav">
        <div className="createBox">
        <button className="create">+Create</button>
        <input type="text" className="search" />
        <button className="searchBtn"></button>
        </div>
        <div className="userBox">
            <h2>Krishna</h2>
            <img src="" alt="" className="userImage" />
        </div>
    </div>
    </>
}
export default NavBar;
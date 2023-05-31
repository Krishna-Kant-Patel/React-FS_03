
import './style.css'
function Nav(){

    return <>
        <div className="Nav-bar">
            <div className="left">
                <div className="left-bar">
                    <img className='logo' src="https://logos-world.net/wp-content/uploads/2021/03/Hootsuite-Logo-2014-present.png" alt="" srcset="" />
                    
                </div>
                <div className="left-bar">Platform</div>
                <div className="left-bar">Plans</div>
                <div className="left-bar">Enterprises</div>
                <div className="left-bar">Resources</div>
                <div className="left-bar">Educations</div>
            </div>
            <div className="right">
                <div className="right-bar">Contact us</div>
                <div className="right-bar">Log In</div>
                <div className="right-bar btn">Sign Up</div>
            </div>
        </div>
    </>
}
export default Nav;
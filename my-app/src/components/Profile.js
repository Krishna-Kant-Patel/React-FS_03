import './head.css'

function Profile(){

    return <>
        <div className="container">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1>Name: Krishna</h1>
                <h2>Email: krishna@gmail.com</h2>
                <h2>Gender: Male</h2>
                <p>Trained in DSA, C++, JavaScript</p>
                <label htmlFor="CheckBox">Change thame to Dark</label>
                <input type="checkbox" />
            </div>
        </div>
    </>
}
export default Profile
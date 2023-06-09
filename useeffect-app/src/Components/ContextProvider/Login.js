import { useContext } from "react";
import ContextApi from "./CustomContext";

function Login(){
    const {login} = useContext(ContextApi)

    return <>
        <div>
            <h1>Login componenet</h1>
            <input type="text" placeholder="Enter userName" />
            <input type="password" placeholder="Enter Password" />
            <button onClick={login}>Login</button>
        </div>
    </>
}
export default Login;
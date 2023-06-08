import D from "./D";

function C(prop){

    return <>
        <h1>Component C</h1>
        <hr/>
        <D Data = {prop.data}/>
    </>
}
export default C;
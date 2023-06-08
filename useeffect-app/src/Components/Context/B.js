import C from "./C";



function B(prop){
    return <>
        <h1>Component B</h1>
        <hr></hr>
        <C data = {prop.Name}/>
    </>
}
export default B;

import { useRef, useReducer } from "react"

function myReducer(state, action){

    if(action.type==="inc"){
        return (state ={
            ...state,
            count: state.count + action.paylaod,
        })
    }

    

}

function Home(){
    const [state, dispatch] = useReducer(myReducer, {count: 0});

    const refs = useRef();
    const changeStyle= ()=>{
        refs.current.style.color = 'red';
        refs.current.innerText = "hello use ref"

    }
   let col = 'yellow'
    return<>
    <h1 style={{color:`${col}`}}>chnage color</h1>
    <h2 ref={refs}>use ref</h2>
    <button onClick={changeStyle} >Change Style</button>
    <div style={{height:"300px",
width:"300px", margin:"auto"}}>
    <h1>{state.count}</h1>
    <button onClick={(()=>{
        dispatch({
            type: "inc",
            paylaod: 5,
        })
    })} >increase</button> &nbsp; &nbsp;
    <button>decrease</button>&nbsp; &nbsp;
    <button>reset</button>
</div>
    </>
}
export default Home;
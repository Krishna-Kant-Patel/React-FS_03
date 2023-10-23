import { useState } from "react";
import  './style.css'
function Home(){
    const [data, setData] = useState('')
const [todos, setTodos]= useState([]);
const [inprogress, setInpro] = useState('');
const [taskdone, setTaskdone] = useState('');
const  todosSet=(e)=>{
    if(e.target.value==="todos"){
        setTodos({...todos,data})

    }
    else if(e.target.value==="progress"){
        setInpro(data)
    }
    else{
        setTaskdone(data)
    }

}
const submitTask=()=>{
    console.log(todos);
    console.log(inprogress);
    console.log(taskdone);
}

    return<>
    <div className="containe">
        <div className="addBox">
        <h1>Add task</h1>
        <hr/>
        <h3>Add task descroption</h3>
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setData(e.target.value)} ></textarea>
        </div>
        <div className="buttonBox">
            <h3>select task status</h3>
            <input type="radio" name="Todos" onClick={todosSet} value="todos" id="" />To do
            <input type="radio" name="Todos" onClick={todosSet} value="progress" id="" />In Progress
            <input type="radio" name="Todos" onClick={todosSet} value="task" id="" />Task done
        </div>
        <button onClick={submitTask}>Create Task</button>
    </div>
    <div className="main">
        <div className="todosBox">
            {todos &&
            todos.map((ele)=>{
                return<>
                <div className="TodosBox">
                    <p>{ele}</p>
                </div>
                </>
            })
            }
        </div>
        <div className="todosBox">
            {taskdone &&
            taskdone.map((ele)=>{
                return<>
                <div className="TodosBox">
                    <p>{ele}</p>
                </div>
                </>
            })
            }
        </div>
        <div className="todosBox">
            {todos &&
            todos.map((ele)=>{
                return<>
                <div className="TodosBox">
                    <p>{ele}</p>
                </div>
                </>
            })
            }
        </div>
    </div>
    
    </>
}

export default Home;
import React, {useState, useContext} from "react";
import { GlobalContext } from "../global/globalContext";

export default function AddTask(){

    let [task, setTask] = useState([]);
    let [status, setStatus] = useState(false);

    const {addTask} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newTask = {
            id: Math.floor(Math.random() * 10000000),
            task,
            status
        }
    }


    return(
        <form onSubmit={onSubmit}>
            <div className="main-container">
                <div className="form-control">
                    <input type="text" placeholder="Add your task" onChange={e => setTask(e.target.value)}/>
                    <button onClick={setStatus(true)}>OK</button>
                    <button onClick={setStatus(false)}>X</button>
                </div>
            </div>
        </form>    
    );
}
import React, {useState, useContext} from "react";
import { GlobalContext } from "../global/globalContext";

export default function AddTask(){

    let [task, setTask] = useState([]);

    const {addTask} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newTask = {
            id: Math.floor(Math.random() * 10000000),
            task
        }

        addTask(newTask);
    }


    return(
        <>
            <h3>Add New Task</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Task</label>
                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
}
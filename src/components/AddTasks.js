import React, {useState, useContext} from "react";
import { GlobalContext } from "../global/globalContext";

const AddTasks = () => {

    let [task, setTask] = useState('');
    let {tasks} = useContext(GlobalContext);
    

    const onSubmit = (e) => {
        e.preventDefault();

        let newTask = {
            id: Math.floor(Math.random() * 100000000),
            task,
            status: false
        }

        tasks.push(newTask);
    }


    return(
        <>
            <h3>Add Your Daily Tasks</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <input type='text' placeholder="Enter your task here..." onChange={(e) => setTask(e.target.value)}/>
                </div>
                <button className="btn-submit">Submit</button>
            </form>
        </>
    );
}

export default AddTasks;